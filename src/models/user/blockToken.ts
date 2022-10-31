import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import connection from "../connection";

const blockToken = (token: string, date: Date) => new Promise((
  resolve: (value: unknown) => void,
  reject: (reason?: any) => void
) => {
  connection.query(
    `DELETE FROM tokens WHERE expiration < NOW();
    INSERT INTO tokens (token, expiration) VALUES (?, ?)`,
    [token, date],
    (
      error: Query.QueryError | null,
      results: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader
    ) => error ? reject(error) : resolve(results)
  );
});

export default blockToken;
