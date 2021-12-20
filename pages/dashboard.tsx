import type { NextPage } from "next";
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../api/Users/UsersModel";
import { AppLayout } from "../components";
import { DashboardActions } from "../redux/actions/dashboard";
import { IStore } from "../redux/store/Store";

const Dashboard: NextPage = () => {
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    dispatch(DashboardActions.GetUsers());
  }, [dispatch]);

  const { isLoading } = useSelector((store: IStore) => store.common);
  const { users } = useSelector((store: IStore) => store.dashboard);

  useEffect(() => {
    if (!users.length && !isLoading) {
      getUsers();
    }
  }, [users]);

  return (
    <AppLayout>
      <h3>Secret Users</h3>
      <ul>
        {users.map((u: User) => (
          <li key={u.id}>{`${u.first_name} ${u.last_name}`}</li>
        ))}
      </ul>
    </AppLayout>
  );
};

export default Dashboard;
