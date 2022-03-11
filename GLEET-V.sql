CREATE DATABASE GLEET_V;
USE GLEET_V;

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

Create table Makinat(
Makina_ID int identity(1,1) primary key,
Brandi varchar(255),
Modeli varchar(255),
Ngjyra varchar(255),
Karburanti varchar(255),
Viti int,
Klasa varchar(255)
);

INSERT INTO Makinat VALUES('Mercedes','AMG-GT','Black','Gas', Null ,'Sports');

SELECT * FROM Makinat;

ALTER TABLE Makinat add Karburanti varchar(255)

UPDATE Makinat SET Viti=2021 where Makina_ID=1;
-----------------------------------------------------------------------------------------------------------------------------------

Create table Sponzorat(
Sponzorat_ID int identity(1,1) primary key,
EmriSponzorit varchar(255),
Logo varchar(255),
Banner varchar(255),
PershkrimiSponzorit varchar(255)
);

INSERT INTO Sponzorat VALUES('BMW','Logo1','Banner.jpg','AudiA7 is the best');

SELECT * FROM Sponzorat;

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
PershkrimiGjuhes varchar (1000)
);

INSERT INTO Gjuha VALUES('English', 'hahefarg');
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

---------------------------------------------------------------------------------------------------------------------------------------

Create table Destinacionet(
Destinacionet_ID int identity(1,1) primary key,
Emri varchar(255),
Logo varchar(255),
Banner varchar(255),
Pershkrimi varchar(255)
);

INSERT INTO Destinacionet VALUES('Prishtina','Logo1','Banner.jpg','My PS2 broke :(');

SELECT * FROM Destinacionet;

---------------------------------------------------------------------------------------------------------------------------------------

Create table Sherbimet(
Sherbimi_ID int identity (1,1) primary key,
Foto varchar (1000),
Emri varchar (50),
Pershkrimi varchar (500)
)

Insert into Sherbimet values ('bruh.jpg', 'A Service', 'Some description lol')

Select * from Sherbimet
----------------------------------------------------------------------------
create table Register(
Emri varchar (255) not null,
Mbiemri varchar (255) not null,
Perdoruesi varchar (255) not null,
Email varchar (255) not null,
Fjalekalimi varchar (255)not null,
KonfirmoFjalekalimin varchar (255) not null,
)

insert into Register values ('Eron','Blakaj','Eblakaj','eronblakaj@hotmail.com','1234','1234')
select * from Register

---------------------------------------------------------------------------------------------------------------------------------------

Create table Investitoret(
Investitoret_ID int identity (1,1) primary key,
Emri varchar (1000),
Mbiemri varchar (1000),
Pershkrimi varchar (1000),
Foto varchar (1000),
Kontakti varchar (1000)
)

Insert into Investitoret values ('First things first', 'Imma say all the words inside my head', 'Im tired of the something', 'The way that things have been', 'Oh ooooooooooooooooooooooh')

Select * from Investitoret

---------------------------------------------------------------------------------------------------------------------------------------

Create table Ratings(
Ratings_ID int identity (1,1) primary key,
Pershkrimi varchar (1000),
Vlersimi int
)

Insert into Ratings values ('This company sucks!', 1)

Select * from Ratings

---------------------------------------------------------------------------------------------------------------------------------------

Create table Feedback(
Feedback_ID int identity (1,1) primary key,
Titulli varchar (1000),
Komenti varchar (1000),
Pershkrimi varchar (1000)
)

Insert into Feedback values ('I love this app!', 'Titulli', 'NewField')

Select * from Feedback

---------------------------------------------------------------------------------------------------------------------------------------

Create table Zyret(
Zyret_ID int identity (1,1) primary key,
Lokacioni varchar (1000),
Foto varchar (1000),
Kontakti varchar (30),
)

Insert into Zyret values ('Prishtine', 'Foto.png', '049-049-049')

Select * from Zyret

---------------------------------------------------------------------------------------------------------------------------------------

Create table ReturnT(
ReturnT_ID int identity (1,1) primary key,
ReturnTime varchar (30),
ReturnDate date
)

Insert into ReturnT values ('10:40 AM', '2021-01-07')

Select * from ReturnT

---------------------------------------------------------------------------------------------------------------------------------------

Create table FuelUp(
Fuel_ID int identity (1,1) primary key,
Perqindja varchar (30)
)

Insert into FuelUp values ('50%')

Select * from FuelUp

---------------------------------------------------------------------------------------------------------------------------------------

Create table Mirmbajtja(
Mirmbajtja_ID int identity (1,1) primary key,
Agjenda varchar (30),
LlojiMirmbajtjes varchar (50),
Vertetimi varchar (50),
Pershkrimi varchar (1000)
)

Insert into Mirmbajtja values ('12:00 - 13:30', 'Paisje elektronike', 'INSERT VERTETIMIN HERE DOOD', 'So what happened:')

Select * from Mirmbajtja