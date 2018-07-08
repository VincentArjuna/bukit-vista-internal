
-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `booking_id` varchar(45) NOT NULL,
  `booking_guest_name` varchar(45) DEFAULT NULL,
  `booking_status` int(11) DEFAULT NULL,
  `booking_check_in` datetime DEFAULT NULL,
  `booking_check_out` datetime DEFAULT NULL,
  `booking_guest_number` varchar(45) DEFAULT NULL,
  `booking_guest_phone` varchar(45) DEFAULT NULL,
  `booking_guest_eta` varchar(45) DEFAULT NULL,
  `booking_comm_channel` varchar(45) DEFAULT NULL,
  `booking_notes` varchar(45) DEFAULT NULL,
  `booking_earned` varchar(45) DEFAULT NULL,
  `booking_currency` varchar(45) DEFAULT NULL,
  `booking_received_timestamp` varchar(45) DEFAULT NULL,
  `listing_id` varchar(20) DEFAULT NULL,
  `profile_id` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `temp_column` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
