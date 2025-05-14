DROP TABLE IF EXISTS public.usernames CASCADE;

CREATE TABLE public.usernames (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username character varying(255)
);

COPY public.usernames (id, username) FROM stdin;
18	sneha
19	mitthu
20	ayu
21	vishal
22	poky
\.

SELECT pg_catalog.setval('public.usernames_id_seq', 22, true);
