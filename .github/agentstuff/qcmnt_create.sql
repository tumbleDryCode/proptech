-- --------------------------------------------------------
-- Property Commenting System Tables
-- qcmnts: comment thread header (mirrors qmsgs)
-- qcmnt:  comment replies within a thread (mirrors qmsg)
-- qlikes: likes on comments and replies
-- --------------------------------------------------------

-- Table structure for table `qcmnts`
DROP TABLE IF EXISTS `qcmnts`;
CREATE TABLE `qcmnts` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `cmts_rtype` int(11) DEFAULT 5,
  `cmts_threadid` varchar(12) DEFAULT NULL,
  `cmts_prodid` varchar(32) DEFAULT NULL,
  `cmts_prodtype` varchar(12) DEFAULT NULL,
  `cmts_userid` int(12) DEFAULT NULL,
  `cmts_viewed` varchar(5) DEFAULT '-',
  `cmts_from` varchar(64) DEFAULT NULL,
  `cmts_from_icon` varchar(64) DEFAULT NULL,
  `cmts_fromsg_email` varchar(50) DEFAULT NULL,
  `cmts_fromsg_tel` varchar(20) DEFAULT NULL,
  `cmts_fromsg_ip` varchar(22) DEFAULT NULL,
  `cmts_subject` varchar(60) DEFAULT NULL,
  `cmts_matter` text DEFAULT NULL,
  `cmts_media` text DEFAULT NULL,
  `cmts_privacy` varchar(5) DEFAULT 'pub',
  `cmts_status` varchar(10) DEFAULT 'open',
  `cmts_dadded` varchar(12) DEFAULT NULL,
  `cmts_dmodified` varchar(12) DEFAULT NULL,
  `cmts_modifiedby` varchar(26) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  KEY `idx_cmts_prodid_type` (`cmts_prodid`, `cmts_prodtype`),
  KEY `idx_cmts_userid` (`cmts_userid`),
  KEY `idx_cmts_rtype` (`cmts_rtype`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

-- Table structure for table `qcmnt`
DROP TABLE IF EXISTS `qcmnt`;
CREATE TABLE `qcmnt` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `cm_rtype` int(11) DEFAULT 5,
  `cm_threadid` varchar(12) DEFAULT NULL,
  `cm_from` varchar(26) DEFAULT NULL,
  `cm_from_icon` varchar(64) DEFAULT NULL,
  `cm_userid` int(12) DEFAULT NULL,
  `cm_to` varchar(56) DEFAULT NULL,
  `cm_viewed` varchar(5) DEFAULT '-',
  `cm_matter` text DEFAULT NULL,
  `cm_media` text DEFAULT NULL,
  `cm_wildkey` varchar(26) DEFAULT NULL,
  `cm_rating` int(11) DEFAULT 5,
  `cm_vala` varchar(56) DEFAULT NULL,
  `cm_valb` varchar(56) DEFAULT NULL,
  `cm_dadded` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  KEY `idx_cm_threadid` (`cm_threadid`),
  KEY `idx_cm_userid` (`cm_userid`),
  KEY `idx_cm_rtype` (`cm_rtype`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

-- Table structure for table `qlikes`
DROP TABLE IF EXISTS `qlikes`;
CREATE TABLE `qlikes` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `ql_rtype` int(11) DEFAULT 5,
  `ql_cmntId` int(11) DEFAULT NULL,
  `ql_isreply` tinyint(1) DEFAULT 0,
  `ql_userid` int(12) DEFAULT NULL,
  `ql_uicon` varchar(64) DEFAULT NULL,
  `ql_ufullname` varchar(64) DEFAULT NULL,
  `ql_dadded` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  KEY `idx_ql_cmntId_isreply` (`ql_cmntId`, `ql_isreply`),
  KEY `idx_ql_userid` (`ql_userid`),
  KEY `idx_ql_rtype` (`ql_rtype`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------
-- Migration (only needed if tables already exist — skip if running fresh):
-- ALTER TABLE qcmnts ADD COLUMN cmts_prodtype VARCHAR(12) DEFAULT NULL AFTER cmts_prodid;
-- ALTER TABLE qcmnts MODIFY cmts_rtype INT(11) DEFAULT 5;
-- ALTER TABLE qcmnt ADD COLUMN cm_userid INT(12) DEFAULT NULL;
-- ALTER TABLE qcmnt MODIFY cm_rtype INT(11) DEFAULT 5;
-- ALTER TABLE qlikes ADD COLUMN ql_uicon VARCHAR(64) DEFAULT NULL AFTER ql_userid;
-- ALTER TABLE qlikes MODIFY ql_rtype INT(11) DEFAULT 5;

