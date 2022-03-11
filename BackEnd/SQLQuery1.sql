
USE Gleet_V
drop table Users


------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE Users(
ID int NOT NULL IDENTITY(1,1) primary key, 
Emri varchar(255) NOT NULL,
Mbiemri varchar(255) NOT NULL,
Email varchar(255) NOT NULL,
Username varchar(255) NOT NULL,
Passwordi varchar(255) NOT NULL,
Mosha int NOT NULL,
VitiLindjes date,
UserType varchar(20) NOT NULL, -- ADMIN, USER
Roli varchar(30),
Foto varchar(255),
Pershkrimi varchar(255)
);


INSERT INTO Users VALUES('Elham','Musliu','elhamimusliu@gmail.com','Elhami21','Tavolina', 21 , '05-09-2000','Admin', 'Administrator','Foto1', 'I Bukur');
INSERT INTO Users VALUES('Une','Musliu','elhamimusliu@gmail.com','Elhami21','Tavolina', 21 , '05-09-2000','Admin', 'Administrator','Foto1', 'I Bukur');
Select * from Users

---------------------------------------------------------------------------------------------------------------------------------------

create table VendParkingjet (
Parkingjet_ID int identity(1,1) primary key,
Adresa varchar  (255) not null,
Rruga varchar (255) not null,
NumriMakinave int
)

insert VendParkingjet values ('Ulpiana','Aziz Kelmendi',30)
insert VendParkingjet values ('Ulpiana','Henri Dunan',30)
insert VendParkingjet values ('Dardania','Dalmatet',30)
insert VendParkingjet values ('Tophane','Lidhja e Prizrenit',30)

SELECT * FROM VendParkingjet;

----------------------------------------------------------------------------------------------------------------------------------------

Create table Makina(
Makina_ID int identity(1,1) primary key,
Brandi varchar(255),
Modeli varchar(255),
Ngjyra varchar(255),
Karburanti varchar(255),
Viti int,
Klasa varchar(255)
);

INSERT INTO Makina VALUES('Mercedes','AMG-GT','Black','Gas', Null ,'Sports');

SELECT * FROM Makina;

ALTER TABLE Makinat add Karburanti varchar(255)

UPDATE Makinat SET Viti=2021 where Makina_ID=1;
-----------------------------------------------------------------------------------------------------------------------------------

Create table Sponzori(
Sponzori_ID int identity(1,1) primary key,
EmriSponzorit varchar(255),
Logo varchar(255),
Banner varchar(255),
PershkrimiSponzorit varchar(255)
);

INSERT INTO Sponzori VALUES('BMW','Logo1','Banner.jpg','AudiA7 is the best');

SELECT * FROM Sponzori;

-------------------------------------------------------------------------------------------------------------------------------------

Create table Paisjet(
Paisjet_ID int NOT NULL IDENTITY(1,1) primary key,
EmriPaisjes varchar(255),
Foto varchar(255),
PershkrimiPaisjeve varchar(255),
Modeli varchar(255),
NumriPaisjes varchar(255),
);

INSERT INTO Paisjet VALUES('Dashcam','Dashcam.jpg','Funksionon mire','1.1','5');
INSERT INTO Paisjet VALUES('Sponzor','Sponzor.jpg','Funksionon miree','1.3','4');


SELECT * FROM Paisjet;

-------------------------------------------------------------------------------------------------------------------------------------

Create table Antaresimi(
Antaresimi_ID int NOT NULL IDENTITY(1,1) primary key,
EmriAntaresimit varchar(255),
Niveli varchar(255),
);

INSERT INTO Antaresimi VALUES('Taulant','Standart');
INSERT INTO Antaresimi VALUES('Eron','Premium');


SELECT * FROM Antaresimi;

-------------------------------------------------------------------------------------------------------------------------------------

Create table Gjuha(
Gjuha_ID int NOT NULL IDENTITY(1,1) primary key,
EmriGjuhes varchar(255),
);

INSERT INTO Gjuha VALUES('English');
INSERT INTO Gjuha VALUES('Spanish');
INSERT INTO Gjuha VALUES('French');
INSERT INTO Gjuha VALUES('German');

SELECT * FROM Gjuha;

-------------------------------------------------------------------------------------------------------------------------------------

Create table AboutUs(
Pershkrimi_ID int NOT NULL IDENTITY(1,1) primary key,
Pershkrimi varchar (255),
);

INSERT INTO Aboutus VALUES('Gleet-v eshte kompania jone qe merret me japjen me qira te makinave.');

SELECT * FROM AboutUs;
-------------------------------------------------------------------------------------------------------------------------------------

Create table ToS(
ToS_ID int not null identity(1,1) primary key,
PershkrimiToS varchar (8000)
);

Insert into ToS values ('Insert Terms of Service here!');

Select * from ToS

---------------------------------------------------------------------------------------------------------------------------------------

Create table ContactForm(
ContactForm_ID int not null identity (1,1) primary key,
Emri varchar (255),
Email varchar (255),
Mesazhi varchar (2000)
)

Insert into ContactForm values ('Elhami', 'i wont give u my email dude -_-', 'This is NOT a message!')

select * from ContactForm

---------------------------------------------------------------------------------------------------------------------------------------

Create table CustomerSupport(
CustomerSupport_ID int not null identity (1,1) primary key,
Emri varchar (40),
Mbiemri varchar (40),
Nr_Tel varchar (30)
)

Insert into CustomerSupport values ('Elhami', 'Musliu', '+38344444444')

select * from CustomerSupport