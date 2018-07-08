
-- --------------------------------------------------------

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
CREATE TABLE `area` (
  `area_id` varchar(20) NOT NULL,
  `area_name` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `temp_column` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`area_id`, `area_name`, `created_at`, `updated_at`, `deleted_at`, `temp_column`) VALUES
('A0000', NULL, NULL, NULL, NULL, NULL),
('A0001', 'Yogyakarta', NULL, NULL, NULL, NULL),
('A0002', 'Uluwatu', NULL, NULL, NULL, NULL),
('A0003', 'Canggu', NULL, NULL, NULL, NULL),
('A0004', 'Ubud', NULL, NULL, NULL, NULL),
('A0005', 'Jakarta', NULL, NULL, NULL, NULL),
('A0006', 'Bandung', NULL, NULL, NULL, NULL),
('A0007', 'Phuket', NULL, NULL, NULL, NULL),
('A0008', 'Bingin', NULL, NULL, NULL, NULL),
('A0009', 'Balangan', NULL, NULL, NULL, NULL),
('A0010', 'Jimbaran', NULL, NULL, NULL, NULL),
('A0011', 'Ungasan', NULL, NULL, NULL, NULL),
('A0012', 'Nusa Dua', NULL, NULL, NULL, NULL),
('A0013', 'Padang Padang', NULL, NULL, NULL, NULL),
('A0014', 'Gili Trawangan', NULL, NULL, NULL, NULL),
('A0015', 'Seminyak', NULL, NULL, NULL, NULL),
('A0016', 'Kuta', NULL, NULL, NULL, NULL),
('A0017', 'Singapore', NULL, NULL, NULL, NULL),
('A0018', 'Cemangi', NULL, NULL, NULL, NULL),
('A0019', 'Penang', NULL, NULL, NULL, NULL),
('A0020', 'Nusa Penida', NULL, NULL, NULL, NULL),
('A0021', 'Gili Air', '2018-07-02 16:51:19', NULL, NULL, NULL);
