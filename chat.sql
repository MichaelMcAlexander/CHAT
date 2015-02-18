-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2014 at 01:06 AM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE IF NOT EXISTS `parents` (
`PARENT_ID` int(11) NOT NULL,
  `LASTNAME` varchar(30) NOT NULL,
  `FIRSTNAME` varchar(30) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `PHONE` varchar(20) NOT NULL,
  `EMAIL` varchar(100) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `parents`
--

INSERT INTO `parents` (`PARENT_ID`, `LASTNAME`, `FIRSTNAME`, `ADDRESS`, `PHONE`, `EMAIL`) VALUES
(1, 'Smith', 'Aaron', '123 main st', '804-555-1234', 'test@example.com'),
(2, 'Jones', 'Jason', '123 main st', '804-555-1234', 'test@example.com'),
(3, 'Foster', 'Aaron', '123 main st', '804-555-1234', 'test@example.com'),
(4, 'Jameson', 'Jason', '123 main st', '804-555-1234', 'test@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
`STUDENT_ID` int(11) NOT NULL,
  `PARENT_ID` int(11) NOT NULL,
  `LASTNAME` varchar(30) NOT NULL,
  `FIRSTNAME` varchar(30) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `DOB` date NOT NULL,
  `PHONE` varchar(20) NOT NULL,
  `SCHOOL` varchar(100) NOT NULL,
  `GRADE` varchar(11) NOT NULL,
  `TUTORING_SITE` varchar(100) NOT NULL,
  `STATUS` varchar(11) NOT NULL,
  `YMA_LOVE` varchar(11) NOT NULL,
  `MENTOR` varchar(25) NOT NULL,
  `MEDICAL_INFO` varchar(200) NOT NULL,
  `GENDER` varchar(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`STUDENT_ID`, `PARENT_ID`, `LASTNAME`, `FIRSTNAME`, `ADDRESS`, `DOB`, `PHONE`, `SCHOOL`, `GRADE`, `TUTORING_SITE`, `STATUS`, `YMA_LOVE`, `MENTOR`, `MEDICAL_INFO`, `GENDER`) VALUES
(1, 4, 'Jameson', 'James', '123 main st', '2000-11-13', '804-555-1234', 'CHA', '9', 'HS-Mix', 'active', 'yes', 'smith', 'seasonal allergies', 'male'),
(2, 2, 'Johnson', 'Tim', '123 main st', '1999-01-12', '804-555-1234', 'Main High School', '9', 'main', 'active', 'yes', 'smith', '', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE IF NOT EXISTS `volunteers` (
`VOL_ID` int(11) NOT NULL,
  `LASTNAME` varchar(30) NOT NULL,
  `FIRSTNAME` varchar(30) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `PHONE_NUM` varchar(20) NOT NULL,
  `EMAIL` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`VOL_ID`, `LASTNAME`, `FIRSTNAME`, `ADDRESS`, `PHONE_NUM`, `EMAIL`) VALUES
(1, 'Smith', 'John', '123 main st', '804-555-1234', 'test@example.com'),
(2, 'Smith', 'Jane', '123 main st', '804-555-1234', 'test@example.com'),
(3, 'Allen', 'John', '123 main st', '804-555-1234', 'test@example.com'),
(4, 'Parker', 'Jane', '123 main st', '804-555-1234', 'test@example.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
 ADD PRIMARY KEY (`PARENT_ID`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
 ADD PRIMARY KEY (`STUDENT_ID`), ADD KEY `PARENT_ID` (`PARENT_ID`);

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
 ADD PRIMARY KEY (`VOL_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
MODIFY `PARENT_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
MODIFY `STUDENT_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
MODIFY `VOL_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
