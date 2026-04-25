-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2026 at 02:00 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `signups`
--

CREATE TABLE `signups` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `signups`
--

INSERT INTO `signups` (`id`, `firstName`, `email`, `phone`, `address`, `zip`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Hop', 'creatives@ondirect.in', '+1 (318) 985-3245', 'Voluptate debitis ip', '16698', '$2b$10$VvopS3wRg2TWRRJsvKZ.YOpxg9x6ulzVDgbC6N6gW6a4FGS/b8oZ.', '2026-04-24 22:50:20', '2026-04-24 22:50:20');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `fname`, `lname`, `email`, `created_at`, `updated_at`) VALUES
(4, 'Sneha', 'Joshi', 'sneha4@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(6, 'Rohit', 'Kumar', 'rohit6@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(7, 'Anjali', 'Singh', 'anjali7@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(8, 'Vikas', 'Yadav', 'vikas8@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(9, 'Neha', 'Gupta', 'neha9@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(10, 'Suresh', 'Reddy', 'suresh10@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(11, 'Pooja', 'Mehta', 'pooja11@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(12, 'Arjun', 'Nair', 'arjun12@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(13, 'Kiran', 'More', 'kiran13@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(14, 'Deepak', 'Jain', 'deepak14@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(15, 'Manoj', 'Das', 'manoj15@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(16, 'Rina', 'Paul', 'rina16@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(17, 'Ajay', 'Chavan', 'ajay17@example.com', '2026-04-20 14:26:16', '2026-04-20 14:26:16'),
(18, 'pranav', 'Pawar', 'sunita18@example.com', '2026-04-20 14:26:16', '2026-04-20 22:35:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `signups`
--
ALTER TABLE `signups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `phone_2` (`phone`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `phone_3` (`phone`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `phone_4` (`phone`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `phone_5` (`phone`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `phone_6` (`phone`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `phone_7` (`phone`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `phone_8` (`phone`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `phone_9` (`phone`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `phone_10` (`phone`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `phone_11` (`phone`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `phone_12` (`phone`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `phone_13` (`phone`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `phone_14` (`phone`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `phone_15` (`phone`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `phone_16` (`phone`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `phone_17` (`phone`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `phone_18` (`phone`),
  ADD UNIQUE KEY `email_19` (`email`),
  ADD UNIQUE KEY `phone_19` (`phone`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `phone_20` (`phone`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `phone_21` (`phone`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `phone_22` (`phone`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `phone_23` (`phone`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `signups`
--
ALTER TABLE `signups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
