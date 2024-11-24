import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../api/users-api';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const users = await getUsers();
                setUsers(users);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);


    const fetchUser = async (id) => {
        setLoading(true);
        try {
            const user = await getUser(id);
            setUser(user);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const addUser = async (user) => {
        setLoading(true);
        try {
            const newUser = await createUser(user);
            setUsers([...users, newUser]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const editUser = async (id, user) => {
        setLoading(true);
        try {
            const updatedUser = await updateUser(id, user);
            setUsers(users.map((user) => user.id === id ? updatedUser : user));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const removeUser = async (id) => {
        setLoading(true);
        try {
            await deleteUser(id);
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UsersContext.Provider value={{ users, user, error, loading, fetchUser, addUser, editUser, removeUser }}>
            {children}
        </UsersContext.Provider>
    );

};
UsersProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

            