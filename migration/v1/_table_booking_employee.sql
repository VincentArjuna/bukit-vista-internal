
-- --------------------------------------------------------

--
-- Table structure for table `booking_employee`
--

DROP TABLE IF EXISTS `booking_employee`;
CREATE TABLE `booking_employee` (
  `booking_id` varchar(45) NOT NULL,
  `employee_id` varchar(20) NOT NULL,
  `role` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `temp_column` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
