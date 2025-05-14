--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
-- SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: usernames; Type: TABLE; Schema: public; Owner: mydb_2s9x_user
--

CREATE TABLE public.usernames (
    id integer NOT NULL,
    username character varying(255)
);


ALTER TABLE public.usernames OWNER TO mydb_2s9x_user;

--
-- Name: usernames_id_seq; Type: SEQUENCE; Schema: public; Owner: mydb_2s9x_user
--

ALTER TABLE public.usernames ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usernames_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: usernames; Type: TABLE DATA; Schema: public; Owner: mydb_2s9x_user
--

COPY public.usernames (id, username) FROM stdin;
18	mydb_2s9x_user
19	mitthu
20	ayu
21	vishal
22	poky
\.


--
-- Name: usernames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mydb_2s9x_user
--

SELECT pg_catalog.setval('public.usernames_id_seq', 22, true);


--
-- Name: usernames usernames_pkey; Type: CONSTRAINT; Schema: public; Owner: mydb_2s9x_user
--

ALTER TABLE ONLY public.usernames
    ADD CONSTRAINT usernames_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

