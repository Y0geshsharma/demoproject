-- MySQL dump 10.13  Distrib 5.7.29, for osx10.15 (x86_64)
--
-- Host: localhost    Database: battledroidsql
-- ------------------------------------------------------
-- Server version	5.7.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `droids`
--

DROP TABLE IF EXISTS `droids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `droids` (
  `slnumber` int(11) NOT NULL AUTO_INCREMENT,
  `Kind` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Strength` int(11) NOT NULL,
  `Agility` int(11) NOT NULL,
  `Intelligence` int(11) NOT NULL,
  `Terrain` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`slnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `droids`
--

LOCK TABLES `droids` WRITE;
/*!40000 ALTER TABLE `droids` DISABLE KEYS */;
/*!40000 ALTER TABLE `droids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history` (
  `slnumber` int(11) NOT NULL AUTO_INCREMENT,
  `winner` varchar(255) NOT NULL,
  `TotalBattlePoint` int(11) NOT NULL,
  `TotalKill` int(11) NOT NULL,
  `TotalDamage` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`slnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `troppers`
--

DROP TABLE IF EXISTS `troppers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `troppers` (
  `slnumber` int(11) NOT NULL AUTO_INCREMENT,
  `Kind` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Strength` int(11) NOT NULL,
  `Agility` int(11) NOT NULL,
  `Intelligence` int(11) NOT NULL,
  `Terrain` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`slnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `troppers`
--

LOCK TABLES `troppers` WRITE;
/*!40000 ALTER TABLE `troppers` DISABLE KEYS */;
/*!40000 ALTER TABLE `troppers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-15 12:09:45
