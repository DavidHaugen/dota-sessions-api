CREATE TABLE "matches" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES "user"(id)
    ON DELETE CASCADE NOT NULL,
  "match_id" BIGINT NOT NULL,
  "happy" TEXT NOT NULL,
  "work" TEXT NOT NULL,
  "question" TEXT NOT NULL,
  "notes" TEXT NOT NULL
);
