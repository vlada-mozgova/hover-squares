import React from "react";
import { Table } from "../Table/Table";
import "../GamePage.scss";
import { Header } from "./Header";

export const FrontBar: React.FC = () => {
  return (
    <div className="frontBar">
      <Header />
      <Table />
    </div>
  );
};
