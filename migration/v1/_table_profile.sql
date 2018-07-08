
-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
CREATE TABLE `profile` (
  `profile_id` varchar(20) NOT NULL,
  `profile_name` varchar(45) DEFAULT NULL,
  `profile_email` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `temp_column` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`profile_id`, `profile_name`, `profile_email`, `created_at`, `updated_at`, `deleted_at`, `temp_column`) VALUES
('PA0000', 'NULL', NULL, '2018-07-01 23:08:53', NULL, NULL, NULL),
('PA0001', 'W', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0002', 'BV', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0003', 'BC', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0004', 'HA', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0005', 'TL', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0006', 'KK', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0007', 'KW', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0008', 'BW', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0009', 'BSW', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0010', 'JW', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0011', 'J', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0012', 'DJ', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0013', 'SH', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0014', 'G', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0015', 'BS', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0016', 'A', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0017', 'Gb', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0018', 'Agoda', NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('PA0019', 'T', NULL, '2018-07-02 22:05:51', NULL, NULL, NULL);
