-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2026 at 08:55 PM
-- Server version: 10.11.6-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `developers`
--

-- --------------------------------------------------------

--
-- Table structure for table `qmsg`
--

CREATE TABLE `qmsg` (
  `_id` int(11) NOT NULL,
  `ms_rtype` int(11) DEFAULT NULL,
  `ms_threadid` varchar(12) DEFAULT NULL,
  `ms_from` varchar(26) DEFAULT NULL,
  `ms_to` varchar(56) DEFAULT NULL,
  `ms_viewed` varchar(5) DEFAULT NULL,
  `ms_matter` text DEFAULT NULL,
  `ms_media` text DEFAULT NULL,
  `ms_wildkey` varchar(26) DEFAULT NULL,
  `ms_rating` int(11) DEFAULT NULL,
  `ms_vala` varchar(56) DEFAULT NULL,
  `ms_valb` varchar(56) DEFAULT NULL,
  `ms_dadded` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qmsg`
--

INSERT INTO `qmsg` (`_id`, `ms_rtype`, `ms_threadid`, `ms_from`, `ms_to`, `ms_viewed`, `ms_matter`, `ms_media`, `ms_wildkey`, `ms_rating`, `ms_vala`, `ms_valb`, `ms_dadded`) VALUES
(21, 0, '48', 'pnunw1ntgxl', '', '-', 'answer from 501b', '', '', 5, '', '', '1710065651'),
(22, 0, '48', 'wwpb5jyf82', '', '-', '601 says it sucks', '', '', 5, '', '', '1710065765'),
(23, 0, '48', 'wwpb5jyf82', '', '-', '601 says it again', '', '', 5, '', '', '1710065829'),
(24, 0, '48', 'pnunw1ntgxl', '', '-', 'chill 601', '', '', 5, '', '', '1710065858'),
(25, 0, '48', 'pnunw1ntgxl', '', '-', 'chill in thread to', '', '', 5, '', '', '1710065883'),
(26, 0, '48', 'pnunw1ntgxl', '', '-', 'chill rahboo', '', '', 5, '', '', '1710066063'),
(27, 0, '49', 'pnunw1ntgxl', '', '-', 'what is it 601?', '', '', 5, '', '', '1710081353'),
(28, 0, '49', 'wwpb5jyf82', '', '-', 'reply 501', '', '', 5, '', '', '1710081410'),
(29, 0, '84', '64', '66', '-', 'sofia to valentina', '', '', 5, '', '', '1759689633'),
(30, 0, '81', '65', '64', '-', 'estas ai sofia? https://titan/phpmyadmin/?route=/sql&db=developers&table=qmsg&pos=0', '', '', 5, '', '', '1759690113'),
(31, 0, '80', '65', '66', '-', 'diogo to valentina. diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.diogo to valentina.', '', '', 5, '', '', '1759693045'),
(32, 0, '80', '65', '66', '-', 'rerwtretrett\nertertre\nertreter\nteret', '', '', 5, '', '', '1759694117'),
(33, 0, '81', '64', '65', '-', 'yep sofia to diogo', '', '', 5, '', '', '1759695946'),
(34, 0, '79', '64', '58', '-', 'sofia to ana', '', '', 5, '', '', '1759696070'),
(35, 0, '84', '64', '58', '-', 'sofuia to ana', '', '', 5, '', '', '1759696258'),
(36, 0, '0', '58', '60', '-', 'ana to sofia', '', '', 5, '', '', ''),
(37, 0, '0', '58', '60', '-', 'ana to sofia', '', '', 5, '', '', ''),
(38, 0, '0', '58', '65', '-', 'ana to diego', '', '', 5, '', '', ''),
(39, 0, '0', '58', '65', '-', 'anaaaa to diogoooo', '', '', 5, '', '', ''),
(40, 0, '90', '65', '54', '-', 'second maessage to marie', '', '', 5, '', '', '1759700893'),
(41, 0, '92', '65', '62', '-', 'new one from diego to valentina', '', '', 5, '', '', '1759701533'),
(42, 0, '92', '62', '65', '-', 'valentina to diego', '', '', 5, '', '', '1759701607'),
(43, 0, '92', '62', '65', '-', 'whats up diego? \"', '', '', 5, '', '', '1759703581'),
(44, 0, '71', '65', '63', '-', 'hi luis', '', '', 5, '', '', '1759787896'),
(45, 0, '108', '60', '64', '-', 'hi costa', '', '', 5, '', '', '1759924195'),
(46, 0, '78', '66', '63', '-', 'hi luiz', '', '', 5, '', '', '1759924834'),
(47, 0, '112', '23', '66', '-', 'hi valentina', '', '', 5, '', '', '1759927677'),
(48, 0, '108', '64', '60', '-', 'HI LOPEZ', '', '', 5, '', '', '1759928895'),
(49, 0, '94', '64', '62', '-', 'hi valentina', '', '', 5, '', '', '1759930275'),
(50, 0, '79', '64', '63', '-', 'hey luis!!', '', '', 5, '', '', '1759930769'),
(51, 0, '116', '66', '56', '-', 'hi Simone', '', '', 5, '', '', '1759931202'),
(52, 0, '112', '66', '23', '-', 'hello ryaan', '', '', 5, '', '', '1759932184'),
(53, 0, '101', '66', '48', '-', 'hi juan!', '', '', 5, '', '', '1760126732'),
(54, 0, '114', '46', '65', '-', 'hi diego', '', '', 5, '', '', '1760132597'),
(55, 0, '117', '52', '66', '-', 'hi valentina!', '', '', 5, '', '', '1760204012'),
(56, 0, '105', '52', '51', '-', 'hi Laura!', '', '', 5, '', '', '1760204673'),
(57, 0, '81', '65', '64', '-', 'ok sofia', '', '', 5, '', '', '1760214483'),
(58, 0, '88', '65', '56', '-', 'Hi Simone', '', '', 5, '', '', '1760214882'),
(59, 0, '81', '64', '65', '-', 'ok diogo', '', '', 5, '', '', '1760273198'),
(60, 0, '81', '65', '64', '-', 'soia?????', '', '', 5, '', '', '1760273753'),
(61, 0, '84', '64', '66', '-', 'yeah whatever\n#PROPID:78', '', '', 5, '', '', '1760273941'),
(62, 0, '81', '64', '65', '-', 'yep its me', '', '', 5, '', '', '1760274557'),
(63, 0, '84', '64', '66', '-', 'valentina, how much for this property?\n\n#PROPID: 0', '', '', 5, '', '', '1760275030'),
(64, 0, '81', '64', '65', '-', 'how much for this?\n\n#PROPID: 1', '', '', 5, '', '', '1760275204'),
(65, 0, '84', '64', '66', '-', 'valentina, how much is this property?\n\n#PROPID: 131', '', '', 5, '', '', '1760275718'),
(66, 0, '84', '64', '66', '-', 'THIS IS TEXSTING LINk\nhttps://titan/incasa/index.html?ditemid=131', '', '', 5, '', '', '1760277694'),
(67, 0, '113', '64', '46', '-', 'isto . preco?\n\n#PROPID: 93', '', '', 5, '', '', '1760278917'),
(68, 0, '113', '64', '46', '-', 'î Â Partilhar', '', '', 5, '', '', '1760288866'),
(69, 0, '129', '64', '55', '-', 'hi piere,\nssdsds\nsdsdsd', '', '', 5, '', '', '1760289396'),
(70, 0, '129', '64', '55', '-', 'fghftghgf\ngfhfghgf\nfhgfhgfh', '', '', 5, '', '', '1760289423'),
(71, 0, '84', '64', '66', '-', 'test1\ntest 2', '', '', 5, '', '', '1760290035'),
(72, 0, '84', '64', '66', '-', 'testÂ  3\ntest 4', '', '', 5, '', '', '1760290054'),
(73, 0, '84', '64', '66', '-', 'https://titan/incasa/', '', '', 5, '', '', '1760291365'),
(74, 0, '84', '64', '66', '-', 'https://titan/incasa/\n\n#PROPID: 131', '', '', 5, '', '', '1760291493'),
(75, 0, '130', '64', '50', '-', 'ygrtyryre nrtyrtytryrtyertyretyrtyrtytryrtyrtyrtytryrtyrtytrtytryrtrtryrty', '', '', 5, '', '', '1760296725'),
(76, 0, '131', '64', '45', '-', 'ðŸ˜Ž', '', '', 5, '', '', '1760298673'),
(77, 0, '132', '64', '57', '-', 'jiiiÂ ðŸ˜‚', '', '', 5, '', '', '1760356226'),
(78, 0, '84', '64', '66', '-', 'hi valentinaÂ ðŸ˜‚', '', '', 5, '', '', '1760356438'),
(79, 0, '84', '64', '66', '-', 'va%26lt%3Bbr%26gt%3Bjkfkjfk%26lt%3Bbr%26gt%3B%26lt%3Bbr%26gt%3B%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%80%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%26lt%3Bbr%26gt%3B%26lt%3Bbr%26gt%3B%23PROPID%3A%20131', '', '', 5, '', '', '1760356911'),
(80, 0, '84', '64', '66', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%26lt%3Bbr%26gt%3B%26lt%3Bbr%26gt%3B%23PROPID%3A%20131', '', '', 5, '', '', '1760357166'),
(81, 0, '84', '64', '66', '-', 'hhhhh%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%26lt%3Bbr%26gt%3B%26lt%3Bbr%26gt%3B%23PROPID%3A%20131', '', '', 5, '', '', '1760357177'),
(82, 0, '84', '64', '66', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%80%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760358219'),
(83, 0, '84', '64', '66', '-', 'hey%20valentina.%20how%20much%3F%C2%A0%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%26lt%3Bbr%26gt%3B%26lt%3Bbr%26gt%3B%23PROPID%3A%20131', '', '', 5, '', '', '1760358371'),
(84, 0, '84', '64', '66', '-', 'valentina%2C%20a%20link%26lt%3Bbr%26gt%3Bhttps%3A%2F%2Ftitan%2Fincasa%2F', '', '', 5, '', '', '1760358822'),
(85, 0, '84', '64', '66', '-', 'and%26lt%3Bbr%26gt%3Blinke%26lt%3Bbr%26gt%3Bbreaks%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760358869'),
(86, 0, '84', '64', '66', '-', 'and%26lt%3Bbr%26gt%3Bline%26lt%3Bbr%26gt%3Bbreaks', '', '', 5, '', '', '1760358897'),
(87, 0, '84', '64', '66', '-', 'new%26lt%3Bbr%26gt%3Bline%26lt%3Bbr%26gt%3Bbreaks', '', '', 5, '', '', '1760359025'),
(88, 0, '84', '64', '66', '-', 'new%26lt%3Bbr%26gt%3Bline%26lt%3Bbr%26gt%3Bbreaks', '', '', 5, '', '', '1760359181'),
(89, 0, '84', '64', '66', '-', 'new%26lt%3Bbr%26gt%3Bline%26lt%3Bbr%26gt%3Bbreaks%C2%A0%26lt%3Bbr%26gt%3Bbreaks%C2%A0%26lt%3Bbr%26gt%3B%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760359233'),
(90, 0, '84', '64', '66', '-', 'new%3Cbr%3Eline%3Cbr%3Ebreaks', '', '', 5, '', '', '1760359367'),
(91, 0, '84', '64', '66', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760359367'),
(92, 0, '84', '64', '66', '-', 'new%3Cbr%3Eline%3Cbr%3Ebreaks', '', '', 5, '', '', '1760359631'),
(93, 0, '84', '64', '66', '-', 'new%3Cbr%3Eline%3Cbr%3Ebreaks', '', '', 5, '', '', '1760359840'),
(94, 0, '84', '64', '66', '-', 'send%3Cbr%3Echat%3Cbr%3Emessages', '', '', 5, '', '', '1760359887'),
(95, 0, '84', '64', '66', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3Ehttps%3A%2F%2Funicode.org%2Femoji%2Fcharts%2F%3Cbr%3Eok%3F', '', '', 5, '', '', '1760360136'),
(96, 0, '84', '64', '66', '-', 'how%20is%20this%20%3F%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3Ehttps%3A%2F%2Funicode.org%2Femoji%2Fcharts%2F%3Cbr%3Etest%3Cbr%3E%3Cbr%3E%23PROPID%3A%20131', '', '', 5, '', '', '1760360783'),
(97, 0, '84', '64', '66', '-', 'trying%20the%20prop%20again!!%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%A2%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%23PROPID%3A%20131', '', '', 5, '', '', '1760361017'),
(98, 0, '81', '64', '65', '-', 'new%20try%3Cbr%3Ehttps%3A%2F%2Funicode.org%2Femoji%2Fcharts%2F%3Cbr%3Eok%C2%A0%3Cbr%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%23PROPID%3A%20130', '', '', 5, '', '', '1760361192'),
(99, 0, '132', '64', '57', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%A2%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760361267'),
(100, 0, '84', '66', '64', '-', 'yeah%2012000%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760361879'),
(101, 0, '136', '66', '49', '-', 'hi%20Maria', '', '', 5, '', '', '1760364826'),
(102, 0, '139', '52', '60', '-', 'hi%20Sofia!', '', '', 5, '', '', ''),
(103, 0, '141', '52', '50', '-', 'its%20me', '', '', 5, '', '', '1760366018'),
(104, 0, '130', '50', '64', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3Ehow%20much%20fro%20the%20peoperty%3F%3Cbr%3E%3Cbr%3E%23PROPID%3A%20129', '', '', 5, '', '', '1760367318'),
(105, 0, '110', '66', '60', '-', 'hi%20sofia!', '', '', 5, '', '', '1760370448'),
(106, 0, '136', '66', '49', '-', 'hi%20marria', '', '', 5, '', '', '1760370596'),
(107, 0, '136', '66', '49', '-', 'fhghfhg', '', '', 5, '', '', '1760371302'),
(108, 0, '110', '66', '60', '-', 'hello%20sofia!', '', '', 5, '', '', '1760372268'),
(109, 0, '121', '63', '52', '-', 'hi%20david!%40%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760372730'),
(110, 0, '80', '66', '65', '-', 'how%20much%20diogo%3F%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8D%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%23PROPID%3A%20130', '', '', 5, '', '', '1760372810'),
(111, 0, '84', '66', '64', '-', 'and%20this%20one%3F%3Cbr%3E%3Cbr%3E%23PROPID%3A%20129', '', '', 5, '', '', '1760372910'),
(112, 0, '110', '66', '60', '-', 'whats%20up%20sofia%3F', '', '', 5, '', '', '1760372957'),
(113, 0, '134', '66', '66', '-', 'how%20much!!%3Cbr%3E%3Cbr%3E%23PROPID%3A%20123', '', '', 5, '', '', '1760373433'),
(114, 0, '113', '46', '64', '-', 'how%20much%20sofia%3F%3Cbr%3E%3Cbr%3E%23PROPID%3A%20129', '', '', 5, '', '', '1760379503'),
(115, 0, '113', '46', '64', '-', '%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%23PROPID%3A%20129', '', '', 5, '', '', '1760382328'),
(116, 0, '127', '19', '64', '-', 'hi%20Sofia!!', '', '', 5, '', '', '1760479223'),
(117, 0, '144', '19', '66', '-', 'how%20much%3F%3Cbr%3E%3Cbr%3E%20%23PROPID%3A131%20', '', '', 5, '', '', '1760480520'),
(118, 0, '101', '66', '48', '-', 'how%20much%3F%3Cbr%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%20%23PROPID%3A88%20', '', '', 5, '', '', '1760483097'),
(119, 0, '80', '66', '65', '-', 'ggggg%3Cbr%3E%3Cbr%3E%20%23PROPID%3A130%20', '', '', 5, '', '', '1760483355'),
(120, 0, '101', '66', '48', '-', 'ererwerewr', '', '', 5, '', '', '1760483417'),
(121, 0, '144', '66', '19', '-', 'te4t5465', '', '', 5, '', '', '1760484039'),
(122, 0, '144', '66', '19', '-', '545435', '', '', 5, '', '', '1760484066'),
(123, 0, '101', '66', '48', '-', 'rewrewrewr', '', '', 5, '', '', '1760484100'),
(124, 0, '110', '66', '60', '-', 'rrewr', '', '', 5, '', '', '1760484250'),
(125, 0, '135', '66', '61', '-', 'erewr', '', '', 5, '', '', '1760484260'),
(126, 0, '84', '66', '64', '-', 'trretert', '', '', 5, '', '', '1760484325'),
(127, 0, '101', '66', '48', '-', 'erwr', '', '', 5, '', '', '1760484592'),
(128, 0, '101', '66', '48', '-', 'ewrewrewr', '', '', 5, '', '', '1760484837'),
(129, 0, '101', '66', '48', '-', 'reewrew', '', '', 5, '', '', '1760484861'),
(130, 0, '135', '66', '61', '-', '343454', '', '', 5, '', '', '1760484869'),
(131, 0, '80', '66', '65', '-', '4535435%3Cbr%3E%3Cbr%3E%20%23PROPID%3A130%20', '', '', 5, '', '', '1760484880'),
(132, 0, '101', '66', '48', '-', '34324', '', '', 5, '', '', '1760485220'),
(133, 0, '135', '66', '61', '-', '34543543', '', '', 5, '', '', '1760485315'),
(134, 0, '101', '66', '48', '-', 'eertrr%3Cbr%3E%3Cbr%3E%20%23PROPID%3A88%20', '', '', 5, '', '', '1760488444'),
(135, 0, '136', '66', '49', '-', 'how%20much%3F%3Cbr%3E%3Cbr%3E%20%23PROPID%3A81%20', '', '', 5, '', '', '1760537076'),
(136, 0, '136', '66', '49', '-', 'frfffff%3Cbr%3E%3Cbr%3E%20%23PROPID%3A81%20', '', '', 5, '', '', '1760537599'),
(137, 0, '117', '66', '52', '-', 'hi%20david%C2%A0%3Cbr%3Etitan%2Frecamby%2F%3Fpid%3Dmi', '', '', 5, '', '', '1760633822'),
(138, 0, '117', '66', '52', '-', 'i%20mean%2C%3Cbr%3Ehttps%3A%2F%2Ftitan%2Frecamby%2F%3Fpid%3Dmi%3Cbr%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1760633822'),
(139, 0, '84', '66', '64', '-', 'errw%3Cbr%3E%3Cbr%3E%20%23PROPID%3A129%20', '', '', 5, '', '', '1760640206'),
(140, 0, '117', '52', '66', '-', 'ok', '', '', 5, '', '', '1760640368'),
(141, 0, '117', '52', '66', '-', 'got%20it', '', '', 5, '', '', '1760640385'),
(142, 0, '117', '52', '66', '-', 'ok%3Cbr%3E%3Cbr%3E%20%23PROPID%3A131%20', '', '', 5, '', '', '1760640454'),
(143, 0, '117', '52', '66', '-', 'rtertett%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%20%23PROPID%3A131%20', '', '', 5, '', '', '1760640501'),
(144, 0, '117', '52', '66', '-', 'dfgtrtret%3Cbr%3E%3Cbr%3E%20%23PROPID%3A123%20', '', '', 5, '', '', '1760640614'),
(145, 0, '117', '52', '66', '-', 'how%20much%3F%3Cbr%3E%3Cbr%3E%20%23PROPID%3A131%20', '', '', 5, '', '', '1760712614'),
(146, 0, '117', '52', '66', '-', 'ffrfff', '', '', 5, '', '', '1760733102'),
(147, 0, '129', '55', '64', '-', 'how%20much%3F%3F%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%20%23PROPID%3A129%20', '', '', 5, '', '', '1760739166'),
(148, 0, '126', '58', '64', '-', 'hi%20Sofia.%20how%20much%3F%20%23PROPID%3A129%20', '', '', 5, '', '', '1760797961'),
(149, 0, '113', '46', '64', '-', 'the%20prop%3F%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%23PROPID%3A129%20', '', '', 5, '', '', '1760829201'),
(150, 0, '111', '46', '66', '-', 'hi%20valentina!', '', '', 5, '', '', '1760830428'),
(151, 0, '111', '46', '66', '-', 'how%20much%3F%20%23PROPID%3A127%20', '', '', 5, '', '', '1760830468'),
(152, 0, '109', '46', '60', '-', 'hi%20sofia!!', '', '', 5, '', '', '1760831143'),
(153, 0, '78', '63', '66', '-', 'how%20much%3F%20%23PROPID%3A131%20', '', '', 5, '', '', '1760871720'),
(154, 0, '78', '63', '66', '-', 'this%20one%3F%20%23PROPID%3A131%20', '', '', 5, '', '', '1760871739'),
(155, 0, '79', '63', '64', '-', 'hi%20sofia!%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%23PROPID%3A129%20', '', '', 5, '', '', '1760974371'),
(156, 0, '151', '46', '63', '-', 'hi%20Luis%20%23PROPID%3A120%20', '', '', 5, '', '', '1761231100'),
(157, 0, '151', '46', '63', '-', 'hi', '', '', 5, '', '', '1761232583'),
(158, 0, '111', '46', '66', '-', 'how%20much%3F%20%23PROPID%3A127%20', '', '', 5, '', '', '1761232816'),
(159, 0, '0', '0', '46', '-', 'Name%3Aerewr%3Cbr%3EEmail%3Awerewr%3Cbr%3EPhone%3Aewrwer%3Cbr%3E%20%23PROPID%3A133%20', '', '', 5, '', '', ''),
(160, 0, '0', '0', '66', '-', 'Name%3A4532%3Cbr%3EEmail%3A4543%3Cbr%3EPhone%3A435435%3Cbr%3E%20%23PROPID%3A131%20', '', '', 5, '', '', ''),
(161, 0, '109', '60', '46', '-', 'hi%20pedro!%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', '', '', 5, '', '', '1762382989'),
(162, 0, '111', '46', '66', '-', 'how%20much%20is%20this%20one%3F%20%23PROPID%3A131%20', '', '', 5, '', '', '1762445575'),
(163, 0, '114', '46', '65', '-', 'are%20you%20there%3F%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%23PROPID%3A130%20', '', '', 5, '', '', '1762513394'),
(164, 0, '150', '58', '46', '-', 'how%20much%3F%20%23PROPID%3A133%20', '', '', 5, '', '', '1762515474'),
(165, 0, '111', '46', '66', '-', 'and%20this%20one%3F%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%23PROPID%3A131%20', '', '', 5, '', '', '1762518664'),
(166, 0, '111', '46', '66', '-', '%20%23PROPID%3A131%20', '', '', 5, '', '', '1762519192'),
(167, 0, '78', '63', '66', '-', 'how%20much%3F', '', '', 5, '', '', '1764519090'),
(168, 0, '151', '63', '46', '-', 'how%20much%3F%20%23PROPID%3A132%20', '', '', 5, '', '', '1764519297'),
(169, 0, '168', '68', '66', '-', 'same%20old', '', '', 5, '', '', '1776180287');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qmsg`
--
ALTER TABLE `qmsg`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `qmsg`
--
ALTER TABLE `qmsg`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2026 at 08:59 PM
-- Server version: 10.11.6-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `developers`
--

-- --------------------------------------------------------

--
-- Table structure for table `qmsgs`
--

CREATE TABLE `qmsgs` (
  `_id` int(11) NOT NULL,
  `msg_rtype` int(11) DEFAULT NULL,
  `msg_threadid` varchar(12) DEFAULT NULL,
  `msg_cartid` varchar(32) DEFAULT NULL,
  `msg_prodid` varchar(32) DEFAULT NULL,
  `msg_userid` int(12) DEFAULT NULL,
  `msg_viewed` varchar(5) DEFAULT NULL,
  `msg_from` varchar(64) DEFAULT NULL,
  `msg_from_icon` varchar(64) NOT NULL,
  `msg_fromsg_email` varchar(50) DEFAULT NULL,
  `msg_fromsg_tel` varchar(20) DEFAULT NULL,
  `msg_fromsg_ip` varchar(22) DEFAULT NULL,
  `msg_to_userid` int(12) NOT NULL,
  `msg_to` varchar(26) DEFAULT NULL,
  `msg_to_icon` varchar(26) NOT NULL,
  `msg_to_email` varchar(50) DEFAULT NULL,
  `msg_subject` varchar(60) DEFAULT NULL,
  `msg_matter` text DEFAULT NULL,
  `msg_media` text DEFAULT NULL,
  `msg_priority` varchar(10) DEFAULT NULL,
  `msg_status` varchar(10) DEFAULT NULL,
  `msg_docomments` varchar(5) DEFAULT NULL,
  `msg_privacy` varchar(5) DEFAULT NULL,
  `msg_dadded` varchar(12) DEFAULT NULL,
  `msg_dmodified` varchar(12) DEFAULT NULL,
  `msg_modifiedby` varchar(26) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qmsgs`
--

INSERT INTO `qmsgs` (`_id`, `msg_rtype`, `msg_threadid`, `msg_cartid`, `msg_prodid`, `msg_userid`, `msg_viewed`, `msg_from`, `msg_from_icon`, `msg_fromsg_email`, `msg_fromsg_tel`, `msg_fromsg_ip`, `msg_to_userid`, `msg_to`, `msg_to_icon`, `msg_to_email`, `msg_subject`, `msg_matter`, `msg_media`, `msg_priority`, `msg_status`, `msg_docomments`, `msg_privacy`, `msg_dadded`, `msg_dmodified`, `msg_modifiedby`) VALUES
(33, 5, 'kkr3mqdwhg', 'noQvalue', '172', 17, '-', '', '', '', '', '', 0, '16', '', '', 'Question about 1988 BENTLEY  Front left window mechanism c', 'opus dopus diem cotri moku', 'normal', '', 'open', 'open', '0', '1628494342', '1628494342', ''),
(34, 5, '319jd7mlwad', 'noQvalue', '172', 17, '-', '', '', '', '', '', 0, '16', '', '', 'Question about 1988 BENTLEY  Front left window mechanism c', 'gopys diwm', '172_1628494356.gif', '', 'open', 'open', '0', '1628494431', '1628494431', ''),
(35, 5, 'tzqit1crfj', 'noQvalue', '0', 24, '-', '', '', '', '', '', 0, '0', '', '', 'whats up', 'going there', 'normal', '', 'open', 'open', '0', '1701628074', '1701628074', ''),
(36, 5, 'tufhl51zif', 'noQvalue', '0', 24, '-', '', '', '', '', '', 0, '0', '', '', 'to xico', 'to xico', 'normal', '', 'open', 'open', '0', '1701628663', '1701628663', ''),
(37, 5, '70xfy5pkagx', 'noQvalue', '0', 24, '-', '', '', '', '', '', 0, '19941', '', '', 'rwer', 'werewr', 'normal', '', 'open', 'open', '0', '1701632120', '1701632120', ''),
(38, 5, 'nfvgaii3tij', 'noQvalue', '0', 24, '-', '', '', '', '', '', 0, '22732', '', '', 'auto rito', 'fddfd', 'normal', '', 'open', 'open', '0', '1701632973', '1701632973', ''),
(39, 5, '7aduwx87n55', 'noQvalue', '0', 14, '-', '', '', '', '', '', 0, '', '', '', '', '', 'normal', '', 'open', 'open', '0', '1704749513', '1704749513', ''),
(40, 5, '5hk7aphnupp', 'noQvalue', '0', 14, '-', '', '', '', '', '', 0, '', '', '', '', '', 'normal', '', 'open', 'open', '0', '1704749567', '1704749567', ''),
(41, 5, 's74qdgrnu4', 'noQvalue', '0', 0, '-', '', '', '', '', '', 0, '', '', '', '', '', 'normal', '', 'open', 'open', '0', '1707763035', '1707763035', ''),
(42, 5, '5glssl6lm5e', 'noQvalue', '0', 0, '-', 'xxx', '', 'test191@191', '', '', 0, '', '', '', 'Eliminar Cuenta', 'fffff', 'normal', '', 'open', 'open', '0', '1707766827', '1707766827', ''),
(43, 5, 'nmrgbrn4bc', 'noQvalue', '8', 38, '-', '', '', '', '', '', 0, 'c_uid', '', '', 'Question about Amortiguador delantero derecho', 'ijiiji', 'normal', '', 'open', 'open', '0', '1710021557', '1710021557', ''),
(44, 5, 'spaoqhbtjw', 'noQvalue', '21', 38, '-', '', '', '', '', '', 0, 'c_uid', '', '', 'Question about Intermitente delantero izquierdo', 'jkhkjhkjh', 'normal', '', 'open', 'open', '0', '1710023459', '1710023459', ''),
(45, 5, 'irt7rhipebq', 'noQvalue', '19', 38, '-', '', '', '', '', '', 0, 'c_uid', '', '', 'Question about Luz central de freno', 'bew fgdgfdg', 'normal', '', 'open', 'open', '0', '1710023727', '1710023727', ''),
(46, 5, '31yced0yxdg', 'noQvalue', '19', 38, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Luz central de freno', 'dsadasdad', 'normal', '', 'open', 'open', '0', '1710023877', '1710023877', ''),
(47, 5, '4v3504aaxva', 'noQvalue', '2', 38, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Amortiguador delantero derecho', 'hahahhahhaa', 'normal', '', 'open', 'open', '0', '1710061777', '1710061777', ''),
(48, 5, 'rnyz0k2y39', 'noQvalue', '19', 39, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Luz central de freno', 'question from 601', 'normal', '', 'open', 'open', '0', '1710064246', '1710064246', ''),
(49, 5, 'zucjjkfgqz', 'noQvalue', '2', 39, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Amortiguador delantero derecho', 'this is 601. is this you rahbooÂ»', 'normal', '', 'open', 'open', '0', '1710081257', '1710081257', ''),
(50, 5, '791cc9hmep6', 'noQvalue', '2', 38, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Amortiguador delantero derecho', 'this is from mobilr', 'normal', '', 'open', 'open', '0', '1710081675', '1710081675', ''),
(51, 5, 'jx3c6yk5bsd', 'noQvalue', '17', 38, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Puntera paragolpes', 'cxvcfdd dfd', 'normal', '', 'open', 'open', '0', '1710670737', '1710670737', ''),
(52, 5, 'tw2b8zrvzuo', 'noQvalue', '62', 38, '-', '', '', '', '', '', 0, '38', '', '', 'Question about Canto do para-choques', 'fdfdf\nfddfd\n\n\nsfd', 'normal', '', 'open', 'open', '0', '1710672122', '1710672122', ''),
(53, 5, 'xg37p2p3fwj', 'noQvalue', '0', 38, '-', '', '', '', '', '', 0, '0', '', '', '', 'ffg', 'normal', '', 'open', 'open', '0', '1710672610', '1710672610', ''),
(54, 5, '6wragthkdy5', 'noQvalue', '110', 40, '-', '', '', '', '', '', 0, '40', '', '', 'Alternador para un FIAT PUNTO', 'jhhjjhh', 'normal', '', 'open', 'open', '0', '1710757408', '1710757408', ''),
(55, 5, '70phdtaysk', 'noQvalue', '103', 40, '-', '', '', '', '', '', 0, '40', '', '', 'Sistema audio para un BENTLEY BENTAYGA', 'eee', 'normal', '', 'open', 'open', '0', '1711233213', '1711233213', ''),
(56, 5, 'snj1jps57hm', 'noQvalue', '10', 40, '-', '', '', '', '', '', 0, '40', '', '', 'Sistema audio para un MITSUBISHI CARISMA', 'qyayaaa', 'normal', '', 'open', 'open', '0', '1717321832', '1717321832', ''),
(57, 5, 'zwfqod9bzkh', 'noQvalue', '0', 31, '-', '', '', '', '', '', 0, '0', '', '', 'kjhkk', 'ljlkjll', 'normal', '', 'open', 'open', '0', '1720970933', '1720970933', ''),
(58, 5, '4dxlqvppyl6', 'noQvalue', '0', 31, '-', '', '', '', '', '', 0, '0', '', '', 'hahahha', 'jajjjaa', 'normal', '', 'open', 'open', '0', '1720972725', '1720972725', ''),
(59, 5, '1f993qxaqjk', 'noQvalue', '0', 0, '-', '', '', '', '', '', 0, '0', '', '', '', '', 'normal', '', 'open', 'open', '0', '1720972788', '1720972788', ''),
(60, 5, 'jgmhj3cd3p', 'noQvalue', '0', 0, '-', 'dgfdg', '', '', '', '', 0, '0', '', '', 'fgdfhgfhgf 12232', 'gfhgfhgfh', 'normal', '', 'open', 'open', '0', '1720972872', '1720972872', ''),
(61, 5, 'usd3zg76kng', 'noQvalue', '0', 31, '-', '', '', '', '', '', 0, '0', '', '', 'kjhkjhkj', '.kjkjhkj', 'normal', '', 'open', 'open', '0', '1721472958', '1721472958', ''),
(62, 5, 'irdmqqbezji', 'noQvalue', '0', 31, '-', '', '', '', '', '', 0, '0', '', '', 'hehe', 'heheheeeeee', 'normal', '', 'open', 'open', '0', '1723991067', '1723991067', ''),
(63, 5, 'og7baii4k8q', 'noQvalue', '0', 31, '-', '', '', '', '', '', 0, '0', '', '', 'latest contact subject', 'latest contact subject loggen in', 'normal', '', 'open', 'open', '0', '1723991171', '1723991171', ''),
(64, 5, 'c5wwrif5j0b', 'noQvalue', '0', 31, '-', '', '', '', '', '', 0, '0', '', '', '', '', 'normal', '', 'open', 'open', '0', '1725140499', '1725140499', ''),
(65, 5, 'hssgzq9x25r', 'noQvalue', '0', 45, '-', '', '', '', '', '', 0, '0', '', '', 'har har', 'ewrewrewr', 'normal', '', 'open', 'open', '0', '1726997839', '1726997839', ''),
(66, 5, 'ljhheinfzzb', 'noQvalue', '0', 46, '-', '', '', '', '', '', 0, '0', '', '', 'gjjhjghj', 'knkjkjlj', 'normal', '', 'open', 'open', '0', '1727609281', '1727609281', ''),
(67, 5, 'yyp6b22wihp', 'noQvalue', '0', 46, '-', '', '', '', '', '', 0, '0', '', '', '', '', 'normal', '', 'open', 'open', '0', '1733085272', '1733085272', ''),
(68, 5, 'joxcoayyq3k', 'noQvalue', '0', 46, '-', '', '', '', '', '', 0, '0', '', '', 'kihkhk', 'ljlkjkjkl', 'normal', '', 'open', 'open', '0', '1733517301', '1733517301', ''),
(69, 5, '97gu7cjtjc', 'noQvalue', '0', 46, '-', '', '', '', '', '', 0, '0', '', '', 'miiiiiii', 'mooooooo', 'normal', '', 'open', 'open', '0', '1733517327', '1733517327', ''),
(70, 5, 'difas52dpb', 'noQvalue', '0', 46, '-', '', '', '', '', '', 0, '0', '', '', 'from contact from', 'from contact form', 'normal', '', 'open', 'open', '0', '1734476934', '1734476934', ''),
(71, 5, 'zcg3n0ccr6', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 65, 'Diego Almeida', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759157613', '1759157613', ''),
(72, 5, '4kki2jh832', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 66, 'Valentina Santos', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759158099', '1759158099', ''),
(73, 5, 'h779sat1u5e', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 66, 'Valentina Santos', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759158142', '1759158142', ''),
(74, 5, 'kfi1er87s7s', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 66, 'Valentina Santos', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759158172', '1759158172', ''),
(75, 5, 'dpyunhrtksg', 'noQvalue', '0', 66, '-', 'Valentina Santos', '', '', '', '', 65, 'Diego Almeida', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759158792', '1759158792', ''),
(76, 5, 't7verrgzsz', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 66, 'Valentina Santos', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759158983', '1759158983', ''),
(77, 5, 'x9iycr08h1c', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 64, 'Sofia Costa', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759159182', '1759159182', ''),
(78, 5, 'b5q9d8szlgl', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 66, 'Valentina Santos', '', '', '', '', 'normal', '', 'open', 'open', '0', '1759159312', '1764519101', ''),
(79, 5, '111p8jfnzrsn', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '', '', '', '', 64, 'Sofia Costa', '', '', '', 'contacting sofia costa', 'normal', '', 'open', 'open', '0', '1759159586', '1760974388', ''),
(80, 5, 'w4k7gw3ba7e', 'noQvalue', '0', 66, '-', 'Valentina Santos', '', '', '', '', 65, 'Diego Almeida', '', '', '', 'vania a contactar diogo', 'normal', '', 'open', 'open', '0', '1759170000', '1760484886', ''),
(81, 5, 'tzp6q0oim59', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 64, 'Sofia Costa', '', '', '', 'diogo to sofia', 'normal', '', 'open', 'open', '0', '1759183079', '1760361216', ''),
(82, 5, 'f1j65gtffj5', 'noQvalue', '0', 59, '-', 'Luis Martinez', '', '', '', '', 64, 'Sofia Costa', '', '', '', 'luis to sofia', 'normal', '', 'open', 'open', '0', '1759187150', '1759187150', ''),
(83, 5, 'mtot6ac7dxc', 'noQvalue', '0', 59, '-', 'Luis Martinez', '', '', '', '', 66, 'Valentina Santos', '', '', '', 'luis to valntina', 'normal', '', 'open', 'open', '0', '1759187260', '1759187260', ''),
(84, 5, 'm3icnqrcux', 'noQvalue', '0', 66, '-', 'Valentina Santos', '', '', '', '', 64, 'Sofia Costa', '', '', '', 'valentina to sofia', 'normal', '', 'open', 'open', '0', '1759672371', '1760640213', ''),
(85, 5, '4dvyenh6ffh', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 59, 'Luis Martinez', '59_dc50dcbf0f82ab53.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1759698478', '1759698478', ''),
(86, 5, 'yr12xrdre6e', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 51, 'Laura Martinez', '51_d167d24cb0378d9f.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1759699825', '1759699825', ''),
(87, 5, 'pidieyjcawn', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 55, 'Pierre Dupuis', '55_8fbb57de29ec9558.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1759700188', '1759700188', ''),
(88, 5, 'szbpd2ybj7o', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 56, 'Simone de Beauvoir', '56_5d1bf60bb5ed5778.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1759700482', '1760214898', ''),
(89, 5, 'jgv2g92ysao', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 53, 'Jean Dupont', '53_a49ad0637d926ace.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1759700628', '1759700628', ''),
(90, 5, 'wzvzbaqklbh', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 54, 'Marie Curie', '54_8fa913d17acc840b.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1759700810', '1759700810', ''),
(91, 5, 'qa0nos0f68o', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 50, 'Carlos Garcia', '50_1f4da5b7f12d23de.png', '', '', 'diego to carlos', 'normal', '', 'open', 'open', '0', '1759701076', '1759701076', ''),
(92, 5, 'kk6zhm0t96g', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 62, 'Valentina Torres', '62_50d01eacce087c11.jpg', '', '', 'diego to valentina', 'normal', '', 'open', 'open', '0', '1759701209', '1759701209', ''),
(93, 5, 'l9pmrh4tpw', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'diego to pedro', 'normal', '', 'open', 'open', '0', '1759702383', '1759702383', ''),
(94, 5, 'w9q4ys0ahn', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 64, 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', 'valentina to sofia', 'normal', '', 'open', 'open', '0', '1759703028', '1759703028', ''),
(95, 5, 'f35ldqblzma', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 63, 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', 'valentina to luis', 'normal', '', 'open', 'open', '0', '1759785838', '1759785838', ''),
(96, 5, '216n1e1vu4fj', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 61, 'Diego Perez', '61_b2755183348da771.jpg', '', '', 'valemtina to diego', 'normal', '', 'open', 'open', '0', '1759785918', '1759785918', ''),
(97, 5, 'k7rm09pb2tq', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 49, 'Maria Lopez', '49_557c2494627b993e.jpg', '', '', 'valentina to maria', 'normal', '', 'open', 'open', '0', '1759785953', '1759785953', ''),
(98, 5, '2kjd9sox4d1', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 51, 'Laura Martinez', '51_d167d24cb0378d9f.jpg', '', '', 'valentina to laura', 'normal', '', 'open', 'open', '0', '1759786072', '1759786072', ''),
(99, 5, 'yyktllbxdc', 'noQvalue', '0', 62, '-', 'Valentina Torres', '', '', '', '', 58, 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', 'valentina to ana', 'normal', '', 'open', 'open', '0', '1759786253', '1759786253', ''),
(100, 5, '7vydpd6g9zx', 'noQvalue', '0', 65, '-', 'Diego Almeida', '', '', '', '', 48, 'Juan Perez', '48_e3a8eb0a4accc3db.jpg', '', '', 'hi juan!', 'normal', '', 'open', 'open', '0', '1759788672', '1759788672', ''),
(101, 5, 'pmq5ck1iggj', 'noQvalue', '0', 48, '-', 'Juan Perez', '', '', '', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', 'hi valentina!', 'normal', '', 'open', 'open', '0', '1759789028', '1760488450', ''),
(102, 5, 'dutb0px7gu4', 'noQvalue', '0', 48, '-', 'Juan Perez', '', '', '', '', 51, 'Laura Martinez', '51_d167d24cb0378d9f.jpg', '', '', 'hi laura', 'normal', '', 'open', 'open', '0', '1759789068', '1759789068', ''),
(103, 5, 'r6i5rzolhhe', 'noQvalue', '0', 48, '-', 'Juan Perez', '', '', '', '', 63, 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', 'hi luis', 'normal', '', 'open', 'open', '0', '1759790873', '1759790873', ''),
(104, 5, '2ckgmebu3b7', 'noQvalue', '0', 51, '-', 'Laura Martinez', '', '', '', '', 59, 'Luis Martinez', '59_dc50dcbf0f82ab53.jpg', '', '', 'hi luiz', 'normal', '', 'open', 'open', '0', '1759875371', '1759875371', ''),
(105, 5, 'n6nfd82p18p', 'noQvalue', '0', 51, '-', 'Laura Martinez', '51_d167d24cb0378d9f.jpg', '', '', '', 52, 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', 'hi david!', 'normal', '', 'open', 'open', '0', '1759922518', '1760204681', ''),
(106, 5, 'mjd3jxggkit', 'noQvalue', '0', 51, '-', 'Laura Martinez', '51_d167d24cb0378d9f.jpg', '', '', '', 63, 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', 'hi Luiz', 'normal', '', 'open', 'open', '0', '1759923361', '1759923361', ''),
(107, 5, 'h1itiyicw4t', 'noQvalue', '0', 51, '-', 'Laura Martinez', '51_d167d24cb0378d9f.jpg', '', '', '', 64, 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', 'hi Sofia', 'normal', '', 'open', 'open', '0', '1759923510', '1759923510', ''),
(108, 5, 'n1u0hvuwrai', 'noQvalue', '0', 60, '-', 'Sofia Lopez', '60_6f66d1a7c903e7f6.jpg', '', '', '', 64, 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', 'hi sofia', 'normal', '', 'open', 'open', '0', '1759923930', '1759923930', ''),
(109, 5, '1i35r633bqt', 'noQvalue', '0', 60, '-', 'Sofia Lopeza', '60_6f66d1a7c903e7f6.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi pedro', 'normal', '', 'open', 'open', '0', '1759924657', '1762383003', ''),
(110, 5, 'lno5b4etps', 'noQvalue', '0', 60, '-', 'Sofia Lopeza', '60_6f66d1a7c903e7f6.jpg', '', '', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', 'hi valentina', 'normal', '', 'open', 'open', '0', '1759924688', '1760484251', ''),
(111, 5, 'ksj43j8k9gb', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi pedro', 'normal', '', 'open', 'open', '0', '1759925128', '1762519198', ''),
(112, 5, '1u8pawbhymn', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 23, 'Ryan Ruan', '23_1725795384.jpg', '', '', 'hi ryan', 'normal', '', 'open', 'open', '0', '1759927635', '1759932199', ''),
(113, 5, 'czb5d5einxg', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi pedro', 'normal', '', 'open', 'open', '0', '1759929984', '1760829213', ''),
(114, 5, 'h1yn85e4tbn', 'noQvalue', '0', 65, '-', 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi pedro', 'normal', '', 'open', 'open', '0', '1759931021', '1762513425', ''),
(115, 5, 'd1j9zcr5sta', 'noQvalue', '0', 56, '-', 'Simone de Beauvoir', '56_5d1bf60bb5ed5778.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi pedro. its simone.', 'normal', '', 'open', 'open', '0', '1759931097', '1759931097', ''),
(116, 5, '20staqwhked', 'noQvalue', '0', 56, '-', 'Simone de Beauvoir', '56_5d1bf60bb5ed5778.jpg', '', '', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', 'hi valintina its simone', 'normal', '', 'open', 'open', '0', '1759931181', '1759931209', ''),
(117, 5, 'bdty4iretdj', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 52, 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', 'hi david', 'normal', '', 'open', 'open', '0', '1760126616', '1760733110', ''),
(118, 5, 'xztr2eciwd', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 62, 'Valentina Torres', '62_50d01eacce087c11.jpg', '', '', 'hi valentina', 'normal', '', 'open', 'open', '0', '1760126889', '1760126889', ''),
(119, 5, 'o7yatlxp4o9', 'noQvalue', '0', 0, '-', 'undefined', 'undefined', '', '', '', 60, 'Sofia Lopeza', '60_6f66d1a7c903e7f6.jpg', '', '', 'hi Sofia', 'normal', '', 'open', 'open', '0', '1760203710', '1760203710', ''),
(120, 5, '46dimdf536j', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi Pedro!', 'normal', '', 'open', 'open', '0', '1760204573', '1760204573', ''),
(121, 5, '1ikkgcn8zor', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 63, 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', 'hi Luis', 'normal', '', 'open', 'open', '0', '1760204640', '1760372747', ''),
(122, 5, 'dtfy8b05gks', 'noQvalue', '0', 65, '-', 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', '', 65, 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', 'hi Diego!', 'normal', '', 'open', 'open', '0', '1760214565', '1760214565', ''),
(123, 5, 'bbeakjfi68u', 'noQvalue', '0', 65, '-', 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', '', 49, 'Maria Lopez', '49_557c2494627b993e.jpg', '', '', 'hi Maria!', 'normal', '', 'open', 'open', '0', '1760214631', '1760214631', ''),
(124, 5, 'ecct7wsjw5', 'noQvalue', '0', 65, '-', 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', '', 47, 'Jean Mulhouse', '47_1742930288.jpg', '', '', 'hi Jean', 'normal', '', 'open', 'open', '0', '1760214929', '1760214929', ''),
(125, 5, 'l27un4jfrz', 'noQvalue', '0', 65, '-', 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', '', 23, 'Ryan Ruan', '23_1725795384.jpg', '', '', 'hi Ryan', 'normal', '', 'open', 'open', '0', '1760217405', '1760217405', ''),
(126, 5, '8yzqlzjijdo', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 58, 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', 'hi ana!!!', 'normal', '', 'open', 'open', '0', '1760273816', '1760797976', ''),
(127, 5, '66bp18yerxh', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 19, 'Jose Marcos', '19_1729440833.jpg', '', '', 'Hi Jose!!', 'normal', '', 'open', 'open', '0', '1760274514', '1760479232', ''),
(128, 5, 'gz3cft5a3c4', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 48, 'Juan Perez', '48_e3a8eb0a4accc3db.jpg', '', '', 'HI jUAN', 'normal', '', 'open', 'open', '0', '1760277352', '1760277352', ''),
(129, 5, '1nlr67s45b', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 55, 'Pierre Dupuis', '55_8fbb57de29ec9558.jpg', '', '', 'hi piere,Â \nhow are you.', 'normal', '', 'open', 'open', '0', '1760289392', '1760739183', ''),
(130, 5, 'j07cmwuzcyk', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 50, 'Carlos Garcia', '50_1f4da5b7f12d23de.png', '', '', 'hi CarlosÂ \nproptech', 'normal', '', 'open', 'open', '0', '1760290292', '1760367335', ''),
(131, 5, 'tre2m3cjfw', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 45, 'Peter Paul', '45_1725816512.jpg', '', '', 'ðŸ˜€', 'normal', '', 'open', 'open', '0', '1760298657', '1760298685', ''),
(132, 5, 'h3itkcm5c6d', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 57, 'Victor Hugo', '57_21d50a43a731c1d5.jpg', '', '', 'ðŸ˜‚', 'normal', '', 'open', 'open', '0', '1760298859', '1760361273', ''),
(133, 5, 'ttifwtmccs', 'noQvalue', '0', 64, '-', 'Sofia Costa', '64_e84da61790e0452a.jpg', '', '', '', 52, 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760358336', '1760358336', ''),
(134, 5, '7s7995gxdlw', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760362574', '1760373451', ''),
(135, 5, '3ocd3lils4x', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 61, 'Diego Perez', '61_b2755183348da771.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760362612', '1760485317', ''),
(136, 5, 'mdxaozdy18', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 49, 'Maria Lopez', '49_557c2494627b993e.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760364809', '1760537605', ''),
(137, 5, '7zp5x5p6d02', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 65, 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760365026', '1760365026', ''),
(138, 5, 'jmcs4duiaxp', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 59, 'Luis Martinez', '59_dc50dcbf0f82ab53.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760365123', '1760365123', ''),
(139, 5, 'i1f86bez6um', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 60, 'Sofia Lopeza', '60_6f66d1a7c903e7f6.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760365191', '1760365191', ''),
(140, 5, 'jj9hcys30xr', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 55, 'Pierre Dupuis', '55_8fbb57de29ec9558.jpg', '', '', '', 'normal', '', 'open', 'open', '0', '1760365555', '1760365555', ''),
(141, 5, 'irttedart6p', 'noQvalue', '0', 52, '-', 'David Sanchez', '52_717d8b756773f2a0.jpg', '', '', '', 50, 'Carlos Garcia', '50_1f4da5b7f12d23de.png', '', '', 'hi%20Carlos!%3Cbr%3E%3Cbr%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%82%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', 'normal', '', 'open', 'open', '0', '1760365799', '1760366024', ''),
(142, 5, 'y1ponzzk6jb', 'noQvalue', '0', 46, '-', 'Pedro Matias', '22_1726999049.jpg', '', '', '', 48, 'Juan Perez', '48_e3a8eb0a4accc3db.jpg', '', '', 'How%20much%20Juan%3F%3Cbr%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%80%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cbr%3E%3Cbr%3E%23PROPID%3A%2088', 'normal', '', 'open', 'open', '0', '1760446074', '1760446074', ''),
(143, 5, 'mpq9re2qdyo', 'noQvalue', '0', 48, '-', 'Juan Perez', '48_e3a8eb0a4accc3db.jpg', '', '', '', 48, 'Juan Perez', '48_e3a8eb0a4accc3db.jpg', '', '', 'hi%20Juan.%20how%20much%3F%3Cbr%3E%3Cbr%3E%23PROPID%3A%20131', 'normal', '', 'open', 'open', '0', '1760475520', '1760475520', ''),
(144, 5, '55u4sdbd2ah', 'noQvalue', '0', 19, '-', 'Jose Marcos', '19_1729440833.jpg', '', '', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', 'how%20much%20valentina%3F%3Cbr%3E%3Cbr%3E%23PROPID%3A%20131', 'normal', '', 'open', 'open', '0', '1760479272', '1760484068', ''),
(145, 5, '1x2uzofeycv', 'noQvalue', '0', 19, '-', 'Jose Marcos', '19_1729440833.jpg', '', '', '', 65, 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', 'hi%20diogo!%20how%20much%3F%3Cbr%3E%3Cbr%3E%20%23PROPID%3A130%20', 'normal', '', 'open', 'open', '0', '1760479937', '1760479937', ''),
(146, 5, 'ip1dp76g5j', 'noQvalue', '0', 61, '-', 'Diego Perez', '61_b2755183348da771.jpg', '', '', '', 65, 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', 'hi%20DIego%2C%20how%20much%3F%3Cbr%3E%3Cbr%3E%20%23PROPID%3A130%20', 'normal', '', 'open', 'open', '0', '1760482238', '1760482238', ''),
(147, 5, '4v684l99bi6', 'noQvalue', '0', 53, '-', 'Jean Dupont', '53_a49ad0637d926ace.jpg', '', '', '', 58, 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', 'hi%20Ana.%20whats%20the%20price%3F%3Cbr%3E%3Cbr%3E%20%23PROPID%3A106%20', 'normal', '', 'open', 'open', '0', '1760796793', '1760796793', ''),
(148, 5, 'm44iqj9zzd8', 'noQvalue', '0', 58, '-', 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', '', 55, 'Pierre Dupuis', '55_8fbb57de29ec9558.jpg', '', '', 'HI%20PIERRE.%20HOW%C2%A0%20much%3F%20%23PROPID%3A102%20', 'normal', '', 'open', 'open', '0', '1760797671', '1760797671', ''),
(149, 5, '238r9vp28ol', 'noQvalue', '0', 58, '-', 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', 'hi%20Valentina.%20How%20much%3F%20%23PROPID%3A131%20', 'normal', '', 'open', 'open', '0', '1760798039', '1760798039', ''),
(150, 5, 'zm788ulrj3', 'noQvalue', '0', 46, '-', 'Pedro Matias', '22_1726999049.jpg', '', '', '', 58, 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', 'hi%20ana', 'normal', '', 'open', 'open', '0', '1760831103', '1762515494', ''),
(151, 5, 'bn4qawzl4g4', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'hi%20Pedro.%C2%A0%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%3Cspan%20class%3D%22emoji%22%3E%F0%9F%98%8E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E', 'normal', '', 'open', 'open', '0', '1760871963', '1764519308', ''),
(152, 5, '3475p9ixqa8', 'noQvalue', '0', 63, '-', 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', '', 58, 'Ana Torres', '58_800992ef074cd54b.jpg', '', '', 'hi%20ana!', 'normal', '', 'open', 'open', '0', '1760971537', '1760971537', ''),
(153, 5, '6c571gula6s', 'noQvalue', '0', 0, '-', 'undefined', 'undefined', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'whats%20the%20price%3F%20%23PROPID%3A133%20', 'normal', '', 'open', 'open', '0', '1762445148', '1762445148', ''),
(154, 5, 'x9nnd1g4gs', 'noQvalue', '0', 0, '-', 'undefined', 'guest.png', '', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', '', 'gfhfghfghgfhgfh%20%23PROPID%3A133%20', 'normal', '', 'open', 'open', '0', '1762460848', '1762460848', ''),
(155, 5, 'r5jl2ymq2w', 'noQvalue', '0', 0, '-', 'undefined', 'guest.png', '', '', '', 65, 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', '', 'whats%20the%20price%3F%20%23PROPID%3A130%20', 'normal', '', 'open', 'open', '0', '1762461959', '1762461959', ''),
(156, 5, 'vxa7rbgzmtm', 'noQvalue', '0', 0, '-', 'name', 'guest.png', 'email', '', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'Visit', 'test%20send%20%23PROPID%3A132%20', 'normal', '', 'open', 'open', '0', '1762462549', '1762462549', ''),
(157, 5, 'rlw7f8y4bws', 'noQvalue', '0', 0, '-', 'Tim', 'guest.png', 'test191@191', '545777', '', 66, 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', 'price', 'ipsum%20modum%20distri%20tipo', 'normal', '', 'open', 'open', '0', '1762515700', '1762515700', ''),
(158, 5, 'wu8obd2b05l', 'noQvalue', '0', 0, '-', 'imaguest', 'guest.png', 'test191@191', '21211', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'financing', 'how%20much%20is%20this%20listing%20and%20financing%20rates%20on%2040%20year%20mortgage%3F%20%23PROPID%3A133%20', 'normal', '', 'open', 'open', '0', '1762518217', '1762518217', ''),
(159, 5, 'xhco2o4md3r', 'noQvalue', '0', 0, '-', 'blavla', 'guest.png', 'test191@191', '21211', '', 65, 'Diego Almeida', '65_f6f8f768ffa6438d.jpg', '', 'visit', 'lets%20visit%20%23PROPID%3A130%20', 'normal', '', 'open', 'open', '0', '1763293547', '1763293547', ''),
(160, 5, 'ssvmx9jk1b', 'noQvalue', '0', 0, '-', 'sdfsdfs', 'guest.png', 'test191@191', '21211', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'financing', '', 'normal', '', 'open', 'open', '0', '1763327840', '1763327840', ''),
(161, 5, 'z9f2j9uom1', 'noQvalue', '0', 0, '-', 'fgfdgdfg', 'guest.png', 'test191@191', '21211', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'financing', '', 'normal', '', 'open', 'open', '0', '1763328006', '1763328006', ''),
(162, 5, 'xtceqqkl2p', 'noQvalue', '0', 0, '-', 'jjhh', 'guest.png', 'test191@191', '21211', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'price', 'the%20price%3F%20%23PROPID%3A134%20%0A%0AContactos%3A%20whatsapp%2C%20call', 'normal', '', 'open', 'open', '0', '1763328152', '1763328152', ''),
(163, 5, '08uvzc8ala29', 'noQvalue', '0', 0, '-', 'sdss', 'guest.png', 'test191@191', '21211', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'price', 'price%3F%20%23PROPID%3A134%20%20%20%0A%0A%20%20Contactos%3A%20sms%2C%20call', 'normal', '', 'open', 'open', '0', '1763330434', '1763330434', ''),
(164, 5, 'rdketk0q9p', 'noQvalue', '0', 0, '-', 'trry', 'guest.png', 'test191@191', '323', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'financing', '%20%20%0A%0A%20%20Contactos%3A%20whatsapp%2C%20sms%20%20%0Afinance%3F%20%23PROPID%3A133%20', 'normal', '', 'open', 'open', '0', '1763426633', '1763426633', ''),
(165, 5, '7wqyvyux9fe', 'noQvalue', '0', 0, '-', 'gfgdg', 'guest.png', 'test191@191', '323', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'financing', 'Contactos%3A%20whatsapp%2C%20sms%20%20%0Asdrserer%20%23PROPID%3A134%20', 'normal', '', 'open', 'open', '0', '1763426916', '1763426916', ''),
(166, 5, 'lkj9itjljw', 'noQvalue', '0', 56, '-', 'Simone de Beauvoir', '56_5d1bf60bb5ed5778.jpg', '', '', '', 63, 'Luis Ferreira', '63_2be1040ce4e63840.jpg', '', '', 'hi%20luis%2C%20whats%20the%20info%3F', 'normal', '', 'open', 'open', '0', '1765125485', '1765125485', ''),
(167, 5, 'q2i2rxdkxf', 'noQvalue', '0', 0, '-', 't54645', 'guest.png', 'test191@191', '45', '', 68, '', 'default_user.png', '', 'financing', 'Contacts%3A%20whatsapp%20%20%0Ahow%20much%20%23PROPID%3A135%20', 'normal', '', 'open', 'open', '0', '1776180112', '1776180112', ''),
(168, 5, '3mjqdqj3dhh', 'noQvalue', '0', 66, '-', 'Valentina Santos', '66_7a50d3c34937ac3c.jpg', '', '', '', 68, '', 'default_user.png', '', '', 'whats%20up%3F%20%23PROPID%3A135%20', 'normal', '', 'open', 'open', '0', '1776180207', '1776180294', ''),
(169, 5, 'hp55aof2bad', 'noQvalue', '0', 0, '-', 't54645', 'guest.png', 'test191@191', '45', '', 46, 'Pedro Matias', '22_1726999049.jpg', '', 'financing', 'Contacts%3A%20whatsapp%2C%20sms%20%20%0Awhats%20the%20financin%3F%20%23PROPID%3A134%20', 'normal', '', 'open', 'open', '0', '1776201360', '1776201360', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qmsgs`
--
ALTER TABLE `qmsgs`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `qmsgs`
--
ALTER TABLE `qmsgs`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
