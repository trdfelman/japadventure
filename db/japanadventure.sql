-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2015 at 05:42 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `japanadventure`
--
CREATE DATABASE IF NOT EXISTS `japanadventure` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `japanadventure`;

-- --------------------------------------------------------

--
-- Table structure for table `tblfeaturelocation`
--

CREATE TABLE IF NOT EXISTS `tblfeaturelocation` (
  `locationid` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`locationid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=72 ;

--
-- Dumping data for table `tblfeaturelocation`
--

INSERT INTO `tblfeaturelocation` (`locationid`, `description`) VALUES
(19, 'gogo'),
(20, 'gogo'),
(21, 'go'),
(22, 'gogo'),
(56, 'test'),
(57, 'home'),
(58, 'homealone'),
(59, 'kyot'),
(60, 'kyot'),
(61, 'asdasdasd'),
(62, 'japan 3rd floor'),
(63, 'test 1'),
(64, 'test 2'),
(65, 'test 3'),
(67, 'test'),
(70, 'loso'),
(71, 'loso loso');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
