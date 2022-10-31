import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";

import connection from "../connection";

const getUser = (id: string) => new Promise((
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
) => {
  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [id],
    (
      error: Query.QueryError | null,
      results: RowDataPacket[] | RowDataPacket[][] | OkPacket[]
    ) => !error ? results && results.length > 0
      ? resolve(results) : reject(error) : reject(error)
  );
});

export default getUser;
