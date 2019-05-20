BEGIN;

-- psql -h ec2-54-83-192-245.compute-1.amazonaws.com -U lyievkdhcaanjz -d d8fp3g9a3ed442 -f seeds/seed.tables.sql
-- psql -U postgres -d munchstats -f seeds/seed.tables.sql

TRUNCATE
  "user";

INSERT INTO "user" ("id", "username", "name", "password", "steamId")
VALUES
  (
    1,
    'admin',
    'David',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG',
    75446543
  );

SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;