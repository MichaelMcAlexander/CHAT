-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 03, 2015 at 10:59 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
`event_id` int(11) NOT NULL,
  `event_name` varchar(200) NOT NULL,
  `event_description` varchar(10000) NOT NULL,
  `event_date` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `event_description`, `event_date`) VALUES
(1, 'test1', 'this is a test event', '2014-12-03 00:00:00'),
(2, 'test2', 'lorem ipsum', '2014-12-17 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
`PARENT_ID` int(11) NOT NULL,
  `PARENT_USERNAME` varchar(50) NOT NULL,
  `PARENT_PASSWORD` varchar(255) NOT NULL,
  `LASTNAME` varchar(30) NOT NULL,
  `FIRSTNAME` varchar(30) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `CITY` text NOT NULL,
  `STATE` text NOT NULL,
  `ZIPCODE` int(20) NOT NULL,
  `PHONE` varchar(20) NOT NULL,
  `EMAIL` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parents`
--

INSERT INTO `parents` (`PARENT_ID`, `PARENT_USERNAME`, `PARENT_PASSWORD`, `LASTNAME`, `FIRSTNAME`, `ADDRESS`, `CITY`, `STATE`, `ZIPCODE`, `PHONE`, `EMAIL`) VALUES
(1, 'asmith', '329761ccbbac92b6d84b8e98fb67579293c7905d', 'Smith', 'Aaron', '123 main st', 'Richmond', 'Virginia', 55555, '804-555-1234', 'test@example.com'),
(2, 'jjones', 'e4eadea23351ebf70a820af408cd0971eae6addc', 'Jones', 'Jason', '123 main st', 'Richmond', 'Virginia', 55555, '804-555-1234', 'test@example.com'),
(3, 'afoster', '4dd3203aff863d7b12e563a04b5c4692c15f3574', 'Foster', 'Aaron', '123 main st', 'Richmond', 'Virginia', 55555, '804-555-1234', 'test@example.com'),
(4, 'jjameson', '43ed1dd76d78b5021aa1e96a126aeabd9a056c64', 'Jameson', 'Jason', '123 main st', 'Richmond', 'Virginia', 55555, '804-555-1234', 'test@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
`STUDENT_ID` int(11) NOT NULL,
  `PARENT_ID` int(11) NOT NULL,
  `STUDENT_USERNAME` varchar(100) NOT NULL,
  `STUDENT_PASSWORD` varchar(255) NOT NULL,
  `LASTNAME` varchar(30) NOT NULL,
  `FIRSTNAME` varchar(30) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `CITY` varchar(100) NOT NULL,
  `STATE` varchar(20) NOT NULL,
  `ZIPCODE` varchar(20) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`STUDENT_ID`, `PARENT_ID`, `STUDENT_USERNAME`, `STUDENT_PASSWORD`, `LASTNAME`, `FIRSTNAME`, `ADDRESS`, `CITY`, `STATE`, `ZIPCODE`, `DOB`, `PHONE`, `SCHOOL`, `GRADE`, `TUTORING_SITE`, `STATUS`, `YMA_LOVE`, `MENTOR`, `MEDICAL_INFO`, `GENDER`) VALUES
(1, 4, 'stjjameson', 'e73aee43697ceac3c196bcaf5d16473fc33bdcec', 'Jameson', 'James', '123 main st', 'Richmond', 'Virginia', '55555', '2000-11-13', '804-555-1234', 'CHA', '9', 'HS-Mix', 'active', 'yes', 'smith', 'seasonal allergies', 'male'),
(2, 2, 'sttjohnson', '3b424e27b77547c1b70a9f1fd5defad7d0209d4d', 'Johnson', 'Tim', '123 main st', 'Richmond', 'Virginia', '55555', '1999-01-12', '804-555-1234', 'Main High School', '9', 'main', 'active', 'yes', 'smith', '', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
`id` int(10) unsigned NOT NULL,
  `email` varchar(200) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`) VALUES
(2, 'mcalexandems@vcu.edu', 'mike', '$2y$10$BOU/HZO.reVtRqUtPi4ereBmtgupkLKeA0GQ9YmvmUjVdSZW7x6C6'),
(11, 'mcprogramming9@gmail.com', 'amaya', '$2y$10$lNG5DYreUr6sheoGyh7tDeNFEDR92q3K99MtnuKgUrj3Z2VV5JvqG'),
(27, 'martinezjudith25@yahoo.com', 'judy', '$2y$10$n1p2EcALNy799snbC30ODOOFoTjn6iWU5b3.Jasfz88j6rrSEBUkq'),
(28, '', '', '$2y$10$NWDMx3SAnDDlzcsF7jJf7eVb0.BaeE5D3wVMVGvOmINfhuEmSh/Ny'),
(29, 'hello@yahoo.com', 'me', '$2y$10$8117snW4PtAmdezKPSu2FOH1faiLvzQ1qPZDgm2OROgjAiagFr0Gi'),
(30, 'yo@yoyo.com', 'test', '$2y$10$sWbjSFqs2nj0UvxmNTDLVeZk7aPAHPaJysDKXs6c.DV.xNfvGXpsm');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
`VOL_ID` int(11) NOT NULL,
  `VOL_USERNAME` varchar(255) NOT NULL,
  `VOL_PASSWORD` varchar(255) NOT NULL,
  `LASTNAME` varchar(30) NOT NULL,
  `FIRSTNAME` varchar(30) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `CITY` varchar(100) NOT NULL,
  `STATE` varchar(20) NOT NULL,
  `ZIPCODE` varchar(20) NOT NULL,
  `PHONE_NUM` varchar(20) NOT NULL,
  `EMAIL` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`VOL_ID`, `VOL_USERNAME`, `VOL_PASSWORD`, `LASTNAME`, `FIRSTNAME`, `ADDRESS`, `CITY`, `STATE`, `ZIPCODE`, `PHONE_NUM`, `EMAIL`) VALUES
(1, 'voljsmith', 'b77164364106cbab35dc0ae4267490a7417aba4c', 'Smith', 'John', '123 main st', 'Richmond', 'Virginia', '55555', '804-555-1234', 'test@example.com'),
(2, 'voljsmith', 'b77164364106cbab35dc0ae4267490a7417aba4c', 'Smith', 'Jane', '123 main st', 'Richmond', 'Virginia', '55555', '804-555-1234', 'test@example.com'),
(3, 'voljallen', '0d5bd4f1192882f7d85c7d6d834cb2ffb3762a40', 'Allen', 'John', '123 main st', 'Richmond', 'Virginia', '55555', '804-555-1234', 'test@example.com'),
(4, 'voljparker', 'f8fef5c7bc21c1830ed483916b4ecaf9479e2261', 'Parker', 'Jane', '123 main st', 'Richmond', 'Virginia', '55555', '804-555-1234', 'test@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
`worker_id` int(11) NOT NULL,
  `worker_name` varchar(30) NOT NULL,
  `worker_password` varchar(64) NOT NULL,
  `worker_email` varchar(64) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`worker_id`, `worker_name`, `worker_password`, `worker_email`) VALUES
(1, 'mike', 'mike', 'mcalexandems@vcu.edu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
 ADD PRIMARY KEY (`event_id`);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email` (`email`), ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
 ADD PRIMARY KEY (`VOL_ID`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
 ADD PRIMARY KEY (`worker_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
MODIFY `VOL_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `workers`
--
ALTER TABLE `workers`
MODIFY `worker_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;