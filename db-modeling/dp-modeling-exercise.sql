--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: username_restriction; Type: DOMAIN; Schema: public; Owner: eileen
--

CREATE DOMAIN public.username_restriction AS text
	CONSTRAINT username_restriction_check CHECK ((VALUE !~* '(\s|\?|\\)+'::text));


ALTER DOMAIN public.username_restriction OWNER TO eileen;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: photos; Type: TABLE; Schema: public; Owner: eileen
--

CREATE TABLE public.photos (
    id integer NOT NULL,
    url text NOT NULL,
    creator_username_fk text,
    date_added date,
    times_liked integer
);


ALTER TABLE public.photos OWNER TO eileen;

--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: eileen
--

CREATE SEQUENCE public.photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photos_id_seq OWNER TO eileen;

--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eileen
--

ALTER SEQUENCE public.photos_id_seq OWNED BY public.photos.id;


--
-- Name: user_liked_photos; Type: TABLE; Schema: public; Owner: eileen
--

CREATE TABLE public.user_liked_photos (
    id integer NOT NULL,
    username_fk text,
    photo_id_fk integer,
    date_liked date,
    is_liked boolean DEFAULT false
);


ALTER TABLE public.user_liked_photos OWNER TO eileen;

--
-- Name: user_liked_photos_id_seq; Type: SEQUENCE; Schema: public; Owner: eileen
--

CREATE SEQUENCE public.user_liked_photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_liked_photos_id_seq OWNER TO eileen;

--
-- Name: user_liked_photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eileen
--

ALTER SEQUENCE public.user_liked_photos_id_seq OWNED BY public.user_liked_photos.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: eileen
--

CREATE TABLE public.users (
    username public.username_restriction NOT NULL,
    email text NOT NULL,
    join_date date
);


ALTER TABLE public.users OWNER TO eileen;

--
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.photos ALTER COLUMN id SET DEFAULT nextval('public.photos_id_seq'::regclass);


--
-- Name: user_liked_photos id; Type: DEFAULT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.user_liked_photos ALTER COLUMN id SET DEFAULT nextval('public.user_liked_photos_id_seq'::regclass);


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: eileen
--

COPY public.photos (id, url, creator_username_fk, date_added, times_liked) FROM stdin;
1	https://preview.redd.it/1xhqhibal0l81.jpg?width=640&crop=smart&auto=webp&s=7cafd19b42a010bf841fdcf9e3f2477016042df5	userdfs	2022-03-02	\N
2	https://preview.redd.it/swp8b74q8zk81.jpg?width=640&crop=smart&auto=webp&s=6b06140c77c007b6bc62f0df026d2b14db12da56	user123	2022-03-02	\N
3	https://preview.redd.it/j5978riv67o71.jpg?width=640&crop=smart&auto=webp&s=aa30f1779d655c0942f94d5760f027f5daf66e28	user123	2022-03-02	\N
\.


--
-- Data for Name: user_liked_photos; Type: TABLE DATA; Schema: public; Owner: eileen
--

COPY public.user_liked_photos (id, username_fk, photo_id_fk, date_liked, is_liked) FROM stdin;
1	user123	1	2022-03-02	t
2	userdfs	1	2022-03-02	t
3	usernx	1	2022-03-02	t
4	user123	2	2022-03-02	t
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: eileen
--

COPY public.users (username, email, join_date) FROM stdin;
usernx	blarh	2001-01-01
userdfs	rhfd	2001-01-01
user123	sdfsdfd	2001-01-01
\.


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eileen
--

SELECT pg_catalog.setval('public.photos_id_seq', 1, false);


--
-- Name: user_liked_photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: eileen
--

SELECT pg_catalog.setval('public.user_liked_photos_id_seq', 1, false);


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: user_liked_photos user_liked_photos_pkey; Type: CONSTRAINT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.user_liked_photos
    ADD CONSTRAINT user_liked_photos_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- Name: photos photos_creator_username_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_creator_username_fk_fkey FOREIGN KEY (creator_username_fk) REFERENCES public.users(username);


--
-- Name: user_liked_photos user_liked_photos_photo_id_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.user_liked_photos
    ADD CONSTRAINT user_liked_photos_photo_id_fk_fkey FOREIGN KEY (photo_id_fk) REFERENCES public.photos(id);


--
-- Name: user_liked_photos user_liked_photos_username_fk_fkey; Type: FK CONSTRAINT; Schema: public; Owner: eileen
--

ALTER TABLE ONLY public.user_liked_photos
    ADD CONSTRAINT user_liked_photos_username_fk_fkey FOREIGN KEY (username_fk) REFERENCES public.users(username);


--
-- PostgreSQL database dump complete
--

