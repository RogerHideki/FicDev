PGDMP     4                     {            dev_db     15.3 (Ubuntu 15.3-1.pgdg22.04+1)     15.3 (Ubuntu 15.3-1.pgdg22.04+1)     -           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            .           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            /           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            0           1262    49186    dev_db    DATABASE     r   CREATE DATABASE dev_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt_BR.UTF-8';
    DROP DATABASE dev_db;
                postgres    false            �            1259    49192    DadosDeNutricionistas    TABLE       CREATE TABLE public."DadosDeNutricionistas" (
    nome character varying(255) NOT NULL,
    crn character varying(255) NOT NULL,
    uf character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 +   DROP TABLE public."DadosDeNutricionistas";
       public         heap    postgres    false            �            1259    49187    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            *          0    49192    DadosDeNutricionistas 
   TABLE DATA           Z   COPY public."DadosDeNutricionistas" (nome, crn, uf, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   X       )          0    49187    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   �       �           2606    49200 3   DadosDeNutricionistas DadosDeNutricionistas_crn_key 
   CONSTRAINT     q   ALTER TABLE ONLY public."DadosDeNutricionistas"
    ADD CONSTRAINT "DadosDeNutricionistas_crn_key" UNIQUE (crn);
 a   ALTER TABLE ONLY public."DadosDeNutricionistas" DROP CONSTRAINT "DadosDeNutricionistas_crn_key";
       public            postgres    false    215            �           2606    49198 0   DadosDeNutricionistas DadosDeNutricionistas_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."DadosDeNutricionistas"
    ADD CONSTRAINT "DadosDeNutricionistas_pkey" PRIMARY KEY (nome);
 ^   ALTER TABLE ONLY public."DadosDeNutricionistas" DROP CONSTRAINT "DadosDeNutricionistas_pkey";
       public            postgres    false    215            �           2606    49191     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            *   p   x�}�A
�0F���)�@�d�1�\@
�]vS1�� ���nE�����S*=���p]�M��)��щ���~�F�@�x*M3:��ɑx,k���H�p<��,�/��?��)�      )   >   x�32026034546421�M.JM,I�MIL�/�MI��+-)�L����,.I,��*����� �I~     