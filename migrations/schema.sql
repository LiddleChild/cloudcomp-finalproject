CREATE TABLE users
(
    user_id         UUID DEFAULT gen_random_uuid(),
    display_name    VARCHAR(128) UNIQUE NOT NULL,
    email           VARCHAR(128) UNIQUE NOT NULL,
    password        VARCHAR(128) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE topics
(
    topic_id    UUID DEFAULT gen_random_uuid(),
    topic_name  VARCHAR(128) NOT NULL,
    created_by  UUID REFERENCES users(user_id) NOT NULL,
    created_at  TIMESTAMP(0) WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (topic_id)
);

CREATE TABLE events
(
    event_id    UUID DEFAULT gen_random_uuid(),
    topic_id    UUID REFERENCES topics(topic_id) NOT NULL,
    title       VARCHAR(128) NOT NULL,
    description TEXT NOT NULL,
    location    TEXT NOT NULL,
    event_date  TIMESTAMP(0) WITH TIME ZONE NOT NULL,
    created_by  UUID REFERENCES users(user_id) NOT NULL,
    created_at  TIMESTAMP(0) WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (event_id)
);

CREATE TABLE attendees
(
    user_id UUID REFERENCES users(user_id) NOT NULL,
    event_id UUID REFERENCES events(event_id) NOT NULL,
    PRIMARY KEY (user_id, event_id)
);