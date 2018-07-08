
-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `employee_id` varchar(20) NOT NULL,
  `employee_name` varchar(45) DEFAULT NULL,
  `employee_email` varchar(45) DEFAULT NULL,
  `employee_password` varchar(45) DEFAULT NULL,
  `employee_phone` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `temp_column` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `employee_name`, `employee_email`, `employee_password`, `employee_phone`, `created_at`, `updated_at`, `deleted_at`, `temp_column`) VALUES
('E0000', 'NULL', NULL, NULL, NULL, '2018-07-01 23:08:20', NULL, NULL, NULL),
('E0001', 'Air Support 1', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0002', 'Air Support 2', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0003', 'Bayu', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0004', 'Denny', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0005', 'Wayana', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0006', 'Jan', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0007', 'Bastian', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0008', 'Jing', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0009', 'Kris', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0010', 'Ghifarie', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0011', 'Tegar', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0012', 'Candra', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0013', 'Rafik', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0014', 'Gabriel', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0015', 'Tendi', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0016', 'Antria', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0017', 'Emil', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0018', 'Nanda', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0019', 'Gigih', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL),
('E0020', 'Nungki', NULL, NULL, NULL, '2018-07-01 07:39:06', NULL, NULL, NULL);
