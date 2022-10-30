import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import connection from "../connection";

const createUser = (id: string, password: string) => {
  return new Promise((
    resolve: (value: unknown) => void,
    reject: (reason?: any) => void
  ) => {
    connection.query(
      "INSERT INTO users (id, password) VALUES (?, ?) ",
      [id, password],
      (
        error: Query.QueryError | null,
        results: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
      ) => error ? reject(error) : resolve(results)
    );
  })
};

export default createUser;