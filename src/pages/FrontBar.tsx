import React from "react";
import "./GamePage.scss";
import { Header } from "./Header";
import { Table } from "./Table/Table";

export const FrontBar: React.FC = () => {
  return (
    <div className="frontBar">
      <Header />
      <Table />
    </div>
  );
};
