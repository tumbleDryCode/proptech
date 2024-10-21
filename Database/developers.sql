-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2024 at 10:46 PM
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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `aid` int(10) NOT NULL,
  `auser` varchar(50) NOT NULL,
  `aemail` varchar(50) NOT NULL,
  `apass` varchar(50) NOT NULL,
  `adob` date NOT NULL,
  `aphone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`aid`, `auser`, `aemail`, `apass`, `adob`, `aphone`) VALUES
(6, 'final', 'final@gmail.com', 'final', '2020-04-29', '7979656578'),
(7, 'test', 'test@gmail.com', 'test', '2020-04-29', '8997979765'),
(8, 'check', 'check@gmail.com', 'check', '2020-04-29', '8979785688'),
(9, 'admin', 'admin@gmail.com', 'admin', '1999-12-06', '9878786545'),
(10, 'testadmin', 'testa@aa.xom', 'testadmin', '2023-07-27', '9138837');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cid` int(50) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `sid` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`cid`, `cname`, `sid`) VALUES
(9, 'navi mumbai', 3),
(10, 'vapi', 2),
(11, 'valsad', 2);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact` (
  `cid` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`cid`, `name`, `email`, `phone`, `subject`, `message`) VALUES
(2, 'demo', 'demo@gmail.com', '9765989689', 'demo', 'demo'),
(4, 'test', 'test@gmail.com', '7976976979', 'test', 'test'),
(5, 'final', 'final@gmail.com', '7697967967', 'final', 'final'),
(6, 'disha', 'disha@gmail.com', '7898797696', 'demo', 'demo'),
(7, 'qqqq', 'admin@gmail.com', '123123', 'hey hey hey', 'what is up'),
(8, 'hgghg', 'profitcode@gmail.com', '913883735', 'hey hey heya', 'yrtyt is mesage'),
(9, 'Joao Barros', 'profcode@hotmail.com', '913883735', 'cont dude', 'whats up?');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `fid` int(50) NOT NULL,
  `uid` int(50) NOT NULL,
  `fdescription` varchar(300) NOT NULL,
  `status` int(1) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`fid`, `uid`, `fdescription`, `status`, `date`) VALUES
(2, 15, 'Magicbricks made my life easy. It helped me with the search for my first ever investment i.e. 1BHK apartment in Mira Road. Thanks to the team for providing relevant tools like EMI calculator and smart search.\r\n', 1, '2020-04-03'),
(3, 18, 'I am young professional, Magicbricks search helped me in shortlisting property in Navi Mumbai. I learned what kind of property will cost me how much and what are the types of amenities I will be getting?', 1, '2020-04-03'),
(4, 21, 'I was looking for a flat in Andheri and Magicbricks website helped me get one smoothly. I could choose not just the property but also check what others had to say about the area. The site is simple and user friendly.\r\n', 1, '2020-04-03'),
(5, 23, 'The constant touch through other true calls really surprised me.They sent their officer to get the photographs of my shop & promptly posted all the pics which helped me in getting the tenant fast. Hats off to Magicbricks.\r\n', 1, '2020-04-03'),
(6, 24, 'I moved to Mumbai from Delhi early this year and I looked online for a suitable apartment for rent in areas near my workplace in Andheri. Thanks Magicbricks for giving me so many options with Travel Time search.\r\n', 0, '2020-04-03'),
(9, 14, 'My Test Desc', 0, '2023-07-27'),
(10, 29, 'sending feedback from her', 0, '2023-08-02');

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
CREATE TABLE `property` (
  `_id` int(50) NOT NULL,
  `ptitle` varchar(200) NOT NULL,
  `pcontent` longtext NOT NULL,
  `ptype` varchar(100) NOT NULL,
  `bhk` varchar(50) NOT NULL,
  `stype` varchar(100) NOT NULL,
  `bedroom` int(50) NOT NULL,
  `bathroom` int(50) NOT NULL,
  `balcony` int(50) NOT NULL,
  `kitchen` int(50) NOT NULL,
  `hall` int(50) NOT NULL,
  `pfloors` varchar(50) NOT NULL,
  `size` int(50) NOT NULL,
  `price` int(50) NOT NULL,
  `pstreet` varchar(212) NOT NULL,
  `location` varchar(200) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `pzipcode` varchar(12) NOT NULL,
  `ploclat` varchar(64) NOT NULL,
  `ploclng` varchar(64) NOT NULL,
  `feature` longtext NOT NULL,
  `pimage` varchar(300) NOT NULL,
  `pimage1` varchar(300) NOT NULL,
  `pimage2` varchar(300) NOT NULL,
  `pimage3` varchar(300) NOT NULL,
  `pimage4` varchar(300) NOT NULL,
  `uid` int(50) NOT NULL,
  `pstatus` varchar(50) NOT NULL,
  `mapimage` varchar(300) NOT NULL,
  `topmapimage` varchar(300) NOT NULL,
  `groundmapimage` varchar(300) NOT NULL,
  `totalfloor` varchar(50) NOT NULL,
  `pdadded` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`_id`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pstreet`, `location`, `city`, `state`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pimage1`, `pimage2`, `pimage3`, `pimage4`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(31, 'newest', '<p>v nfgjgjhgjghjhgj</p>', 'farm', '1', 'auction', 1, 1, 0, 1, 1, '1', 123243, 233, '', 'Avenida de Ceuta', 'fgdfg', 'fgdfg', '', '', '', '<p>&nbsp;</p>\r\n<!---feature area start--->\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Property Age : </span>10 Years</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Swiming Pool : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Parking : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">GYM : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Type : </span>Apartment</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Security : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Dining Capacity : </span>10 People</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Temple : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">3rd Party : </span>No</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Alivator : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">CCTV : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Water Supply : </span>Ground Water / Tank</li>\r\n</ul>\r\n</div>\r\n<!---feature area end---->\r\n<p>&nbsp;</p>', '31_1718800980.jpg', '', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 0, 'active', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', '1', '2023-08-01 17:07:44'),
(34, 'This is big', '<p><span style=\"background-color: #808000;\"><em><strong>This is bigThis is bigThis is bigThis is bigThis is bigThis is bigThis is bigThis is bigThis is big</strong></em></span></p>', 'ranch', '1', 'rent', 12, 12, 12, 12, 12, '3', 1200, 29999, '', 'Avenida de Ceuta', 'theCity', 'the State', '', '', '', '<p>&nbsp;</p>\r\n<!---feature area start--->\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Property Age : </span>10 Years</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Swiming Pool : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Parking : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">GYM : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Type : </span>Apartment</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Security : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Dining Capacity : </span>10 People</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Temple : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">3rd Party : </span>No</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Alivator : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">CCTV : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Water Supply : </span>Ground Water / Tank</li>\r\n</ul>\r\n</div>\r\n<!---feature area end---->\r\n<p>&nbsp;</p>', '34_1718889788.jpg', '1.jpg', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 0, 'active', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', '3', '2023-08-01 20:32:38'),
(42, 'title of yhe prop', '', 'house', '1', 'sell', 3, 2, 0, 2, 2, '2', 121, 12000, '', 'Rua Dom Nuno Alvares Pereira', 'santarem', 'Lisboa', '', '', '', '<p>&nbsp;</p>\r\n<!---feature area start--->\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Property Age : </span>10 Years</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Swiming Pool : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Parking : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">GYM : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Type : </span>Apartment</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Security : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Dining Capacity : </span>10 People</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Temple : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">3rd Party : </span>No</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Alivator : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">CCTV : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Water Supply : </span>Ground Water / Tank</li>\r\n</ul>\r\n</div>\r\n<!---feature area end---->\r\n<p>&nbsp;</p>', '42_1719776194.jpg', 'admin/property/', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 31, 'active', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', '2', '2023-08-07 17:51:27'),
(44, 'july20', '<p>july20july20july20july20july20july20july20july20</p>', 'house', '1', 'sell', 1, 1, 0, 1, 1, '3', 23, 34343, '', 'Rua Dom Nuno Alvares Pereira', '122', 'braga', '', '', '', '<p>&nbsp;</p>\r\n<!---feature area start--->\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Property Age : </span>10 Years</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Swiming Pool : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Parking : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">GYM : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Type : </span>Apartment</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Security : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Dining Capacity : </span>10 People</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Temple : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">3rd Party : </span>No</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Alivator : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">CCTV : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Water Supply : </span>Ground Water / Tank</li>\r\n</ul>\r\n</div>\r\n<!---feature area end---->\r\n<p>&nbsp;</p>', '44_1718890251.jpg', '', 'admin/property/admin/property/', 'admin/property/admin/property/', 'admin/property/admin/property/', 31, 'active', 'admin/property/admin/property/', 'admin/property/admin/property/', 'admin/property/admin/property/', '3', '2024-06-20 14:30:01'),
(45, 'ytryy', 'DwBwfA1gNgFhcAJ4JsA9OIA', 'house', '1', 'sell', 1, 1, 0, 1, 1, '1', 320, 12005, '', 'Rua Dom Nuno Alvares Pereira', '1', 'tfdgdf', '', '', '', '<p>&nbsp;</p>\r\n<!---feature area start--->\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Property Age : </span>10 Years</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Swiming Pool : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Parking : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">GYM : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Type : </span>Apartment</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Security : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Dining Capacity : </span>10 People</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Temple : </span>Yes</li>\r\n</ul>\r\n</div>\r\n<div class=\"col-md-4\">\r\n<ul>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">3rd Party : </span>No</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Alivator : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">CCTV : </span>Yes</li>\r\n<li class=\"mb-3\"><span class=\"text-secondary font-weight-bold\">Water Supply : </span>Ground Water / Tank</li>\r\n</ul>\r\n</div>\r\n<!---feature area end---->\r\n<p>&nbsp;</p>', '45_1720369287.jpg', '', '', '', '', 31, 'active', '', '', '', '2', '1724605907'),
(46, 'Titulo.. Moradia... ', 'Descriï¿½ao.. Moradia... Descriï¿½ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '5', '5', '5', '5', '5', 5, 'pending', '5', '5', '5', '2', '5'),
(47, 'Titulo.. Moradia... ', 'Q', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '47_1726736370.jpg', '5', '5', '5', '5', 45, 'active', '5', '5', '5', '2', '1726328648'),
(48, 'Titulo.. Moradia... ', 'Descriï¿½ao.. Moradia... Descriï¿½ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '5', '5', '5', '5', '5', 5, 'pending', '5', '5', '5', '2', '1719754314'),
(49, 'Titulo.. Moradia... ', 'Descriï¿½ao.. Moradia... Descriï¿½ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '5', '5', '5', '5', '5', 5, 'pending', '5', '5', '5', '2', '1719754482'),
(50, 'Titulo.. Moradia... gjghjgh', 'DwBwfA9iCuCWCeACCs4GtmtouFopxWAHpwg', 'triplex', '1', 'rent', 5, 2, 1, 1, 1, '2', 125, 199000, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '88888888', '5', '50_1719758211.jpg', '5', '5', '5', '5', 31, 'active', '5', '5', '5', '2', '1725188881'),
(51, 'Titulo.. Moradia... ', 'DwBwfMDOAuBOD2A7A5maALAlpABNnICIOArAIwBkiARpCANw4b76HzHlW0NNa6tFSlGnUbN uNh2HcxfPJMGcRPcQoJKZo3i0XshXbWoH7lsnRI2mtq SemHbuqw5VznUg24vrPZo3Z6rubGQV6yjvTAAPQwCCgQ0eBAA', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78441237248195', '-9.123203888338827', '5', '51_1719760083.jpg', '5', '5', '5', '5', 45, 'active', '5', '5', '5', '2', '1726328914'),
(52, 'Titulo.. Moradia... ', 'Descriï¿½ao.. Moradia... Descriï¿½ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.784193125536895', '-9.12312071958934', '5', '52_1719769015.jpg', '5', '5', '5', '5', 43, 'pending', '5', '5', '5', '2', '1719768933'),
(53, 'mais novo', 'Descriï¿½ao.. Moradia... Descriï¿½ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '53_1719772173.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1719772164'),
(54, 'Titulo.. Maaaaaa', 'DescriiAAAÂ¿AAAÂ“ao.. Moradia... DescriiAAAÂ¿AAAÂ“ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '12005', '38.79168464274132', '-9.124689188898813', '5', '54_1719782914.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1723122477'),
(55, 'Titulo.. Moradia... ', 'Descriï¿½ao.. Moradia... Descriï¿½ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '55_1726736329.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1720357904'),
(56, 'Titulo.. Moradia... ', 'DescriiAAÂ¿AAÂ“ao.. Moradia... DescriiAAÂ¿AAÂ“ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199774444, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.79168464274132', '-9.124689188898813', '5', '54_1719782914.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1720390494'),
(57, 'Titulo.. Moradia...  1115', 'DwBwfMDOAuBOD2A7A5maALAlpABNnAxvPADbAD0MCKE54AUKBFUqhvvkaRSzRQ0yhxWaLLk7EylYXzpggA', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '57_1724591905.jpg', '5', '5', '5', '5', 45, 'active', '5', '5', '5', '2', '1725819422'),
(58, 'Titu  radia... 15514', 'DwBwfA5gFgZtcAI7AM4BcBOB7AdhMsECUS0EMxcJMMU5dJhsC8rldMwA9OtnmN3AAoUAN658rQqWnUyFJklr1oleCyaJYHbuP6CwI8KkwTImolS0zya6suWMrGq0W3ldp-V2GiTfSQsZaypbRRoOBjsKKS0HTwCBH0M-PUDXYLcbBSolSNVNFzZ3Th4vfAMjMAAyHAAjFBAAbgMgA', 'condo', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 219, 'Avenida aaaaa Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.79223445915526', '-9.120643499655777', '5', 'default.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1725360571'),
(59, 'Titulo.. Moradia... ', 'Q', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.784715467781474', '-9.123525295318938', '5', '59_1724593238.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1724621235'),
(60, 'Julio 31 as 21', 'DwBwfMDOAuBOD2A7A5mSAzABJAJunkm 6ymBpuJhyuywA9DAihPeAFCjbQCeANgFMAvACIQAQxw4AligC0g9NABcmACwAGEAA8A3CIhMkqKRgZGWDDlxj9hYyTPmKV6rXoNQ4xsHgIlkQKDgkMCoCURuO1EAI3EAYwBrZAQAV0QcOXj4PnhYVQBidHQAThKNDX0wUJrauvqg8wjqhtrzb0s2ME4QKMFRCSlZZAUBJVVNHSqvZhN8SgwcdtnWa17bfoch5zHXSY9DDtQF aliRchlnytum15NwacRlwn3aYtj9Fx-UyvOtb69kew1G4zcUwMADJEDFICBdDcgA', 'house', '5', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '60_1722282776.jpg', '5', '5', '5', '5', 31, 'pending', '5', '5', '5', '2', '1724592794'),
(61, 'Titulo.. Moradia... ', 'DescriiAÂ¿AÂ“ao.. Moradia... DescriiAÂ¿AÂ“ao.. ', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', 'default.jpg', '5', '5', '5', '5', 44, 'active', '5', '5', '5', '2', '1722292237'),
(62, 'Titulo.. Moradia... ', 'DwBwfAbgFgxg5lOACAZgtUNqezcBkAdgEYDOIA3MAPTgBQwALgIbEA2ApkqYwJ6cBeAERQOASwSMAXEgBMATlkgAHhSFgGjYgHsAJrw1MATtz6CR4yTNkBWFWsONdp-h2GiJUaXLuqkAdzFdRigZAEYANnkAOgB2GyVVdU1WTkcdfUcjR10wYB4jbUI4POY8jgBbJBg2ZlJSYUJmCABaCuZGDiMxZjYWsRgi0mrtNj6KjkIAV37OqsZlRgBhNiMAETY4dUA9C5pKvOoymgKikponHLyT4quQZkIkIOE2dgB9KdeAKz4QDnU1jggRjHO6EA7XM7UC4MKHZGFaPQGeGpDiGKG5eFw4wucweKxIMIADnsySYzh4rncli84WJfkCwVCBKicQSJKuHE4MEYj10wkYFRA7y Pz 1Vq9WEKG0RgqLUGhEYhTY1SMpCMAAVtGJFV0hEgmhN YLhd9eL99aQxAAvNxCMLqIhkShIJ3kCiukjut0un0UP2e53 r2 kPBoOB71hyOUAN uNhhNBpNRiPx6PptNhhjaIFiIpICC9KZ2uAlnjqADi5eB1FzjHzYJzeYLRbYJeEum6ED1YDW3a6NHrjcMw9bxbtzF0FR16gAgtOdUOW03gGOHm2O0IJjAoPcBuoALIcXf7mDLhtFUcrwsTzticgdXf-B93Ri7i8j5uXjd3oQ1MRJkYdQVkAxVPyvb9G1vds7VIKZfiMdQAGUEMHOsV2vH8YK3XMumYdQAHlEI6RtSAg1d1xwu0plIXsAFU6KMCi0TorlGAOaFzixJUcTtPEaR8dlNHJMx OpbxbHsAIghCcIWXiRIHBSdhUU0DIkWMS5gCOSpxTqBohCaVp2k6bpen6BVhkGMY2kmGYxDmJAFmWVYNi2MBAFmDvYKgOI50W0x8HieIQXjYYVOjYdQABVOSkEF7k4jFuLRBFMmRVTUuS2Esj4qlPEkgAGYSyTyiwCusYr6VkplIhiRT2WAHUQCmHkQoFIUPki-UagMqUZTlBUlVGS1fjGXcTwAaylXo6P1Q07Q6iLOX1UV Q4RZ9U3O19V0DpmH6UgimECApF2-a2lIFoOF0RyZX5IwS31agktSniTApXEJOsXxlNKz7xIqoTqsZeT6rZJJHBRdJESybS9N6yUjOaNoOi6Ho gGIYRlsiZplmPSXJWdZNnUQAtU5816RNue5eWeN4PgW9RGK6BaErBc5sqVVKNNS6H4S596yoEoqSqcYXvrkKqPQZOTmXBpT1CawgWravkhCWxnmAmHqJUM6VZXlIphqi7gxrYCaYGmoQUFmsUFuNTrXiZ5zzUWjbgOo4RzpYQ7jqEU79WYcyWl0DhSBgbpiBu4heGEYg6gGFop10IoHSQPbfYqK6bruowHqepAXs5t7coB-L8SkyGRIloGq5lmqwdZRWodUsrZaZeRYjF3nNB40TKSEDv5OiMJZAiRqIXKKpEcM4zUbMjHLOxmzxnsgn5kWYn3PUQBDA8p45hpuEua-LofG6QCJCTiAAWMJfqVqf8lBOnQoZ14UBd2f S3tyd7AAAYmINUPIABy2sODs3BEfSEXEcrwl7ucfmJ8Up91rpXaWpJxZnxFpVaSw95bN0as1Vqr9NYfy-nrfqhshrKlGpyC2ogrYzTYHNA0EDHbCk-hA1abt1qbS9kIH2B0Hz 0DkgYOPRQ7h0jmIaOuhY7x0TjAZOuhU6EHTpnA62drq3UYPdDWj0xTFwCpiMuYkK6CXrlggeX066-RkqDQhDVq5MGQWlTS3NqbAARlQ5GJk0bmUxlZHGa98aOUJr-EmHl97UH2Cgi4z9aYhTCsKNgTMwAABk6hgIgVAlB8DziIKhMg0xqDsQ4MlrITBOR0FWOlo4uWdUiGQ2VqrMhJoPjpJ4fpJGBtBrGzoWbBhltra21YfbDhGtOmvG6TrV2vx Ge22t7DOF1RGEBOmdCRIcw4RyjjHOOQgE5WhUSnNOwjLq6LzgXYxVNym8UqUDIkYtbGA3xC8kGTSFIQwcH6ApXiKkWPKh8ukf1xbfyEXU7wnyG5OOaS4v5YYdJZO0HAHUEjhj BlJNdC-k4GAsecC3BSAADMpLXm9MMpaYlktyX4Ivgi35WD3GIMJclFgmV1Kwz7rUwg2h-BGGYCARoAqhUgEfi-FJ78jCinnNyMQPZ8llMKVCYpnK0gC0uAwW6EAqXCFIIEd8UAla1GjmwPIJC1bCAqHoYUsq3bzSmba3Q9q5ULLtKMnQyhnoHDNZyA4uqsqlwQTypBXKAVYjVWGkpEbwD-NoGAIAA', 'house', '5', 'sell', 5, 2, 1, 1, 1, '2', 1252, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78434392795337', '-9.12252398262188', '5', '62_1723928655.jpg', '5', '5', '5', '5', 31, 'sold', '5', '5', '5', '2', '1724593381'),
(63, 'new prop with add 1', 'DwewNgfAUMYJYWAZwC4CcQDsDmEUAs4kACI47EEAE2IDdtt9Htj98Ardjt91rr4HAC2LAMZgAhkiQBeAERxRmKgCMUmOcSRpR8iVSFxMAegAOGUwFM0KAJ7GArAE4A+gEYA7ACYALM4DMXv4AHAB07KbYmhJgKPJIVDZolprGiMaoGDjp8NCwCMjoWLhCANb8pRylpayVxOxI+DTspVT4SMAZRdmduTC5hVm4VNJUI+MdXUM5CDDG4HmmEADulpbLq8TW22hbnCqcmJ1LMEvrq8vHEEA', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Ab', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '63_1724105653.jpg', '5', '5', '5', '5', 46, 'pending', '5', '5', '5', '6', '1727633496'),
(64, 'new pprop aug 2555', 'DwEwlgbgBAxgNgQwM5ILwCIAeBOAZgNgEZspNCA7AJgHtyAnfUwgKwUoFdKAvUgdgA4u7ALYBWUiAAuogJ6TcpSogAWABiRNsAZjABHUQHcmSAxEmEtTAA5gtqrmCYBzJHGrKrTSuQROYpLgAjakwQRjIAFjheci5RdAA AChQSFhEFAwyKloGJlYOblI8IhJMASExCWk5BUwlBDUNMm09Q1JmAGsIdk7wwhhYpH5ElPBoeGQ0LBLiJhz6foLOHnLBEXFQmvkmMBlmXWpKRTgDchZR1ImM6ZwCOeyaRfy2Fb51qq3ZHfqVdU0dPoDJdxukplkKhtqt86lx8JRcLp2Ex8HAQFZeOwQWlJpksOxVPhqEhjmRqJ1KJRCIFsRAEsAkJI6LQnAkACIAU0kCDAcCQwAA9IzmeRWYLxslxZBJQKJSlZdL5XKpXSlYqrmC8XdSvMnnkyMsimtKpspDCTo1-i1Ae0yCYzBZrLZ7I4yC43B4vD4-AFgqF lEYnFaZrblxsCBoghSBF2AgrJskL5RLp KROsowkgQF58J1sJQELT6UgrAhyKGssQbUZMBz2OwnHBXRZcAhdIEOUwIBBOoFmoRMMIzKoyoQ4M2wMpdMYC-xTKRlJ0OVwkNRnMI6KItJgmDArMxhLwW7gnAg6JIZJoIlplPhd5h2CBdOdSTveAhRMJSPgrHRMJgdQQKmXAchWmDUOO-CBN mCrrgqgcOgUDgHQGAIOwkjUIkAByYAwF2AAy55OF2hBQJ2IDMtQ37kYECCSMo1HfvRSAcsIYGSFA8bnpIHHkFxBhgIxsDUGAFaIOw5BUVe4lQByCAwMoFHsLy4CigAdIKpblvSCqqlcJZlhWuK3NWbS1vWjbNkwWhth2XZkD2fYDkOI5jhOYBTjOdpzgumBLiua4bluO57geR4nmeF5Xi0N53g T4voQb7lJ sG-v gGkMBghgaQkFwNBsHwYhWIoWAaHoBhWG4RyRidMJSlgQANFAZbiZIbW4G41B0OJTjcdJUDUIxHJ0FA7BWCADEDRpUAAMpYRAHJtQAYv1ICkW15Y5myYBIMoBjIMo41QOJ8BPhyIDzcR0luHQOZljIGjHZIZ27VATInVpQrGXpyoSgyxmVlg5lAqQVlNi2dntp23a9v2TBuZIo5MJ53mzpQ87QAFy6ruubqbtuD4DBFx5MKevGxcQ8X3qQSWvqQ77pT f4AUBIH5RBUEwQESAIUhFVVTV2EJAA6l2dAckilUcgAXFAACiinKQgIDsHAXFYdxVhWHAV5CSJAAkoiqFAuAcqtUAAGrjWAuBgAggRwF2IAclYYEzS7XYABLUOwbHKNQaLneQMA0V21AKJYkhgBxGhjVAwi0IxBtQNLAktdp-0qpKQM6SZNxVq0EN1g20O2fZ8NOYjrnDqjHmTtOWM44u PBUToWk-uh4U2QVMxdet704 z5M5gLNfmzWWc3l4GFcV-OC VqHoZhYsAOLUNQOaZ9ycBDU941rj4h-KAdWF0DIv2FwD6r6fnOLF2DYCEKoyg9R0gQdvOTAcgcLQFAJDvyysYGQqguQTTILwOgqh3qOWwLwBEgQ6gwFwOwTAqImC6GUMobA-BNjCFUMILQ2BwKzDHDIaa7hOikFRlYJAFJIb8HYD2B8IBmCUHwPgaBhBCBgFEHQcgsEGKUAiDAPhwhlD8CcKoaBHIAL8BkMiTAsZ4ybEIPwEA2AwD4DKBmLMOYyD4EkCAJATg0xkGUHASgIBlCDUwE4JwMgKA UIJBeqmBmDMxwDAAwxjCAchTKoZgjiLAXmIbBCgepwj8F4Iwok6NOjsEIFYXGhA2AIASVwZC3JAjiXdpgDAqhkLMldhgQImEsLkGLGMZ 4IwZwCBE4OoThdAwBkJiZmqhOhcGoLFbAzBP4SJ-GATowh B8NUAYLW8JdS5HwHUjUpkqwLH1LoSQVhKCqFivgcZkzpmzMkPCEMqywaqDgKY3QdCYGHCsKdWyEAHYQBkIkAAZOQfsVgADced6nXEaeUQgSAIhDKYJc65tzhCBHqCAc25RdnyOwGcl WCkCqBAOQCIMZyC8A5DTCI w4DYGUmPZQzBsDkTIPwcgMhOiSDKAYAwlAnCPiYEJLhcAcXGihJgOAU1sDCFgnAUQ BmC8FuYQTonQZA0BAKioFAj36f0PmQXQzAYDYAgJsA4VhyDsFiggMFpDbm6BlswKw1LKDKAKfgWslCmDUJALQiQ0RKCUotE0FhbCIAPiUGcFgkMK42RMWYixVjCA2LsQ40gzjXHkHcYaVYhBzBaFgVxMkQSDDeN8dgfxgTgm6FCeErQkSSE4NUE4LQ5BPCYHiYkwm44UlpIyVknJHQXpwBgJm5gP9Ah-zIHZNhOyGZaGYKIQIlh1WqFTJ8bh7BeC6FdEglBaCMFYLVYQXB DCGkCiWQ8CNbcAQG2RILhPC ECKESI0gYiJFSJkXIhRSiVExjjAmJg2jdH6PTJmfA2YFnPEnggZgaJAjXkwvwJtEBQLkEwJmkAvAZAuN4PQygBCnBSoCjABAmAEUgr8hk1QVhcDKBgKSFg AEAGDoOEnVWgnDsEjfIJwlBYGkGEqEPBeTnaFMUSUspIcOSVOqbQZC54nYAFplDICsNQKwU0MD8XKpJhAUnECdjgBgG2YB6pQAALLxigAASXILgMWALQZkAJZQYQAwJBIHwPE-wdyFOPKcaoAYmBbkRF4BHOgW7IWSBuU8l5NMOSBEkNo1RxBsBUvIC2exuhSUBBDn0ptrLqDYCQGOYRuB GxT-KmMJQmKnoHILQDkyEZrcik88pAcZu00X1lyMAtAMBgCcJV6WHyvmlj Y-NUBkhv-LG6NibgMGlaiCXK zrnzHOf80wJd7nHJyO875-zfUgtXJC1KrQzyT0RaizFzQ8WKBJenKlrNXifGTz8QE- ISwm2XLcIMrImKtVZqwxdTDWmsR2EK1uOHX0BdZ69VhInzvmDeVKN0E5zIjAV0MgJg17hGwV3qIcs07CDSNkfI5ZiO0WQk GaWoAR4SIli6idEmJFVagJESEkTBySUmpIkYG5ZrPg1tFDUNrY4aOUIM5JGZAUZozIBjFuvlsb UCgTEKJNwp9yitTYeCUGbjxSr4j808sHs2ypgXKcGCq8xKgLMqTqYARG3MoGrlV161SMjzpHfPLIhphtXEXYv67uRnhzHKXNwIguc-wWEVukIS06ifLkbUTMAEEc66RT Qe BkSdAuZ8SSj7OqQ0mh-135Y2s9M8JLntnFIC9c8Lrz0u-OvdV2FwjFyyMG5S-HM3dxuX5e40V53QgThiZhTIL3SKlNoqXk16PCIXBOhWH4I5fAvB8C4DoBB7IAV7V46QGAKLCBow8yKnzTAYB CEFXEfwgMhbf28dyLDeteQbu4b576y3uW 1zbxLjvY54N3gGC7777chH6Lyn7n6X5JiJCETUC4ag4VgHS6x-ghDxwMQchp56R3zjbw64EPwShAA', 'house', '5', 'sell', 5, 2, 1, 1, 1, '2', 1252, 220, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78434392795337', '-9.12252398262188', '5', '64_1725204324.jpg', '5', '5', '5', '5', 31, 'active', '5', '5', '5', '2', '1725292147'),
(65, 'MY house is good........', 'Q', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '65_1725816260.jpg', '5', '5', '5', '5', 45, 'active', '5', '5', '5', '2', '1725816330');
INSERT INTO `property` (`_id`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pstreet`, `location`, `city`, `state`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pimage1`, `pimage2`, `pimage3`, `pimage4`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(66, 'MY house is better...', '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-uimDHSCCIGJHIOAGB-I3LAPndUgJtRQGwN09UeHc6QpeCgxMcgfm4CYDAUs09HXCeYNm-DmpGAyCE+cDQaQlJ0HTMmcp2BKnMEKBAMAtbMWauJHOkABEjAmeLC0ZgQFchGEwCCJiFhEgLrMpIMoRgkDLi4ICFgmK1KprhiB5iGBOD5wwyAPgnTtMIR1kpByzFsAMb6egDRQXuLDMaY5DZEAtnrO2Zl1Z6z8t7N42iTVAmhMiaIop-QkmdKtlAiomA8nW6Ke1CpspFS91aZ0xAPTslDPGdM5wczTBLPWds26hz+hKDOdc+5zgnmVyMB8+IPzUBGIBfQEFzgIWwsEAi1oOA0XtCxfixgJL2ohkOHqWljLWWoU5du7l6F+yS4UJPNXFtbj6GMP3g+VuR9nx9oCQqbj9jpi+FII20828fssP+34wHb4B3MHIHOQGmLxAwHINPbAcQJDUHIDZpQ0gIDminT2CwuQ2gunNZG6NjBVBxoTUm-Iqb000CzTmiT4gIxJEYKDMeSAKQkCQGUaQRZ0wJGkPAUg17xCKyhJ1YMFghdmQgEYOgMAhuFHEBAXAFhSDZNyTTUphTim3uoDUNIYAyepo0g07juCeNvDITMPwLiaHQ4bh2rxXa-u+N7bKRHPcvSFEKJQdgIPntg9e1Qn3v3WEA8D2fIJQ786jq95493PIKhVBqJHorL2-CQ-e642hV4M9MO8d2thCPk+DuHaO-PzuBy5RAJwFXKOZ2YExZ8b4pY-gAm7IbvJJuiklOYKnkdY6D0qALIUB3uyneohILkAS0bMXD+N8wApY-b2T8b47mFbX1Mde07pwMYBcCFyK8wfjlBBPie-BV8T-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-k2g2gW1MCO1-tPpy+JW9+-JT+tJwpUmtWYpjWkpTJMp7W5q-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-IfPNIIUHub-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-VwXIHVwQBhOMXaqObFLg-9KApvOdmWwFTNc0g5sAaGVBk5lBwiygP0IkCxGP8kA5sIGNQDKjMTcg0YeqYzKYCXQDsGQGDvovGi6xnIGKdKOlDKDFRqk7eSQFVIFFtAIJbQMKD9DvbXVioiQNGYzBB6PzlAYMeWE8kujeyXunAPbpuzeTa42gzzPqOlHS5IciAtYwKDkWcV5CrWfUV9BAGKgugWiuAWgbgB6WFBwA4bF0j5OfmqBYWYAAgGVGkDjQ+oKxFEbuh+hsAhF5AVQD9AgDrR1BIFa2Pqya4RKgY4xfyGy23E1g8+TMfKCQAIDEh60YARIL50qhdQygXUb0F1JVaIBCOlUJcMVDM41pyAbQBYTR1BaNyIAiQQoJdDkAaLu6ORFqGwCSGVQgYDsMGObEcad9MBXUBoGDBuqFBdRA0XACL20ADR8WnAAYj9C+WAgKoA0XUeNGqg-QjOmfA6H1GZaYB+oVPI5TAAsDkAdWAbAaPEWcjJ8kA4gdrgDBPHfCfobQQCGTBIDBQVlcAfMXIHyjmtXe2owli6GJBpAUu5EEUWUHNhRd7yjMX2E8tW4KJGYX0H5fxK9ZXceiP0B8rkGlgjgQAmvVviQEuZ9CU0YMPqAQESL6iNCPgsLhoua5qwL5xAtgLRSb5GBMZNxDMvlDgCG9LQ+UOQPaLgDPzcA9kJ6AMJABpBhp0hTgbX0Ko2iigmXQEObDNUQAgYbAZoOtEpxnyLUfUZmAlOlEFwo0fUSQFlDrHUA3OdALqEYDkDFrGYWUD1OQDoDjRAoP0H0KHwNVKwZB95ccaWLgDohSWYAPqEPIQA4swYFgOHpcJ56NQtWW8n+ObxDhAxGoMASov5H9D5RUK1UIwIQGxQ-RJAErdXCAGCiMxXZ0g8gD9GikhLax-yAJcSDKjEgCAZ6InrzFyB883mjURAWTCc4ZKwoMg-ydkjnRwxAoDg7APB3GhFAkVWUfyEDHWVU42AIAQKGwGy5g9MAL7X1pgGpWSBXWjoZGAN0QqAiyoCUq-gdDaCMxtRCFH+ZQE4BAxdFacoPmFHFkdQ91PvaqIzDKhmq0gTYAQBnB-aoL1ojrUlcHDBiXRgo2FADQQFP7tCahMHbcbtGJBwAuozIn4c2v0UEc2ABALqDBUOg7DGoYARqFZsQHUBzYSHF0EYHWiSAWQN5MrqmCpqIpkUIabMLmBSQhL0UmKBANilxSMB8UhKYlDynJSmBw0eLUkjGgZzxpE0mJPMjykzTZpzMpNfNOTT7CU0hwI4Wmj5Xpqzgg6y4VcOuEwDPIBgHYcgCygdp7gDwQMgxs4hrjyN3Exjb3Lyn5SCpnyJdOPLDn9wRkg858Q2uKhHi9x+4IEMCBBFuph0vqKqboA2AYqaltSiDPUgahQamoTSGDa1DowRqOpowWIV1O6k9TepfUsEEEDhDwgEQVobAd0IiBybcReIUwOAggTEhtBJI0kWSPJAsCKRlIACDerTDiZCRug0gQmqOD0JKaAKTAAQEJFoEeD0ol0GAVlAtEVK9hhQAaHDGkAwCpoNnZXGDBKGoB9mPTNoE4QLgBZUM6GBwm5AmpeRfIRzUKBFCigxQ4olGxKMlFSgZRsouUAqEVFKgVQaodUBqM1FajtROoPUfqENBGhjRJo00WaPNEWjLRVoG0LaG5HM2HRjop0c6FdBuh3QHoT0LbK9HeifRfo-0QGCDHBiQxoYsMeGIjGRiox0YmMbGGzTxgEwiYJMBGGAAphUwaYdMBmMzFZjsxOY3MXmPzEFjCxRY4sSWNLBhBywFYSsFWGrA1hawcCusUpobGNimwLYVsG2HbAdhIAnYLsV3u7E9jexfY-kf2IHHpEhww4EcDnXHATgpxFp-e1OOnEzjKAs4XtNiEmz-SURqItEdAPRGAQB1isX2n7cfXHTkBJ022k2jnBiJ1M4MFGCiI03QDNNv4OldpkgC6aM6+mcOwZnEjBbr6QApIASvgztKEMYstYE7GQ1dJEAbq9kMADAC9qX5AtwCPNTGEpDIZCESAYkMyGASa4NczEWAEBmqbiAgtygCRMgagAaQgKGAVWMlAwyr0DAgYZZivXgByAYDxB+Aw1jQMoGqDGBzSDRnQB1hqgK8biFtAYgFMoCecaChgAs3SQOIV+xiNBQZbpNxE6AcxP-FgMkGIEIBiwMAj1DSGMAiEOAAAAoAAxBAagMABKC-HmueKMAMAGlKAKgfQAGHcmmiKpsmGkApwWQakOJnIFHEzVgwkTRgyQ3eADQqQOPKkH0zYgyQ0mYiCRPoisOgF2INILiDxFgKCQRI6RfOJkVQJpgci1ATAtgVwL5oYABBIgiQTIIUEqCbNAgEwHoICBBALAbgl9I7A3x5ExkMcMRDSBGBBCg5bFCZlkTa4wQ04JguIFkLyENCShASKgFQoCFVC6hTQoLnhaE1CiAifJiwCYCWFrCthJgPYXsiGFPCThakESWJDzgQAhRbwqgB1C4BqoXPYNvtDaAREoiMRYqHxvvV0BCiaRDIigWyK5EkjhRYotSFKKk8KiVRGonUQaJNEWiYANogcXmOOROi3RXonnJgHkAqu3wsueQDb7bDA0EBCABjBJhBKewcgEOFzzAA-s-yFsVMW0EOKGQx2YsA6OjEIOPFniZBuA62BnLEgJAbquoB0EAhgUoZAiTVEFsQMEHYARhtk-geQMWJyDpB4ABIYoOSVdAo6EwIwEZNwCMMlBpA9QelO0GsDDBgtuMxDAsHJqq2CRCLX4P4gwMQiOgEoeRjSQZIW0LQ5qcEOAkRDYhog+SYgTgIQEMREyhAigTvUpG5CNhrIyG2fZ20niZhGGRrxJ5OEgYRfYnRlq-AjqHFHcpCEHiwh4QiIBfcw2PKYhTymCC8jgi3rXlJKRdZysuVLoeUK6XlZgD5X-L+UOqMlcCsFVIBtawqcFNutFRQqxUhsPdXCtOmSqpV0Qg9TKiPTCDUBx6k9JINPRIClVDWYQTih9p4q+gGqAlFes1Q3qBhMAegKPD4FnOBlhtX2ExjNp9MqN+0weL8nmYvhagdQ18A0EaBNBmgLQVoaCH6jggug3QHoUc3xQLqSVd6JZ7qgpSPoh1Jy95+yneXNqZnXKeLMup+SiQ-kCzflXKhWAnpimp6JVfEoOYqpVUaqOcPOBXHnOEBQEFcJxCXg9zBlFGpjWbeGX8QLagkUqa+LfBW25m1QM9YiKRHEqg5l4sSdC0uY9MhkcL65+HH6aRzBI1ty2iJNueiTAB4wfAOsNbkgzxYJmGAaZkIniDzNqIizZZspFWbrMcizYLZiLl2ZyB9mhzIKCczOYXMrmvYAoGUDuYPMYKzzV5u80+bfNlAvzf5oC2BagtwWkLaFrC3haItS2KLNFpwAxZYscWeLAlkSxJZksKWVLEgDSyQB0sUhjLZlqy3ZactuWvLfloKxGUisxWErKVsW19VytZhirZVqq3VaattWurfVkoCNYmszWFrK1p21tb2tHWsYj2q63dbkBPW3ra-n62wABsg2IbLseG0nAQAo2MbYkHGwTZJsU2abDNlmxzZ5t0oBbItiWzLYVsq2NbOtg22WjNtMArbdtp227bUY5AfbAdozOHajtx2dASdo0RnYtz52i7ZdimHAHrtN227Xdvu0PbT8T2hQM9heyvY3tCgd7B9sn2favt32n7b9r+3-aAdgOoHcDuIEg7QdYO8HRDsh1Q7odMO2HXDvh0I7EdSOxMCjqbOo60d9EDHSmMx1Y7sdOOXPHjg+346CdhOonARRJyk4epZO8nRTsp1U7qdNO2nXTvp0M7GdTO5nSzq7xs6d97OjnZzq53c6edvOvnfzsoEC6ErxAIXAmeF0i7RdYu8XRLsl1S7+QOlmXbLlqFyB5cCuRXEroNmTBLhKu1XNoLV3ED1cHQmAJri1za4dcuuB0Hrn1wG5DcRuY3CblNwbmzd5uqgRbviUNXrRVu63Tbp-B25Gx9uh3Y7qd3GjndLu13cgLd38j3cK+T3ZKK9zvIfcvu3m37nzAB44RgeoPcHmoSh7FQYeWUOHoasR6g8UeaPG+Jj2x649nxBPaQET2MVlBSe5PClVT3Vi096ejURnsz1Z7s9Oe3PXnvz3xAaxheovfyb+0l7S9Ze8vRXpPxV4QA1eGvLXjrz17r9DexvU3ub3HZW8fltve3o72d6u8pbHvL3j7z94d3xAgfYPiJrD4R8o+Nt2PvH0T7J9U+fAdCpn2z6598+hfQQhTlL7l9K+1fWvkWAb5N8W+bfZQB3y7498++IAAfkPxb6j9vlmACflPxn5wD5+i-ZfqvwuYb8t+O-YqPjIP6SAj+J-M-hfyv439cAd-DKI-2f6v9GY7-T-t-1-6qB-+gA-yMANAGSBwBprKATALtDwCMySApJLcB8noDMB2AzgLgPwHNg17-kYgZJIEBkCKBVA-8TILoHYhzocgJgSwLYEcCuB+4E6oRQJgvpBBZQYQYCFEEwVyUkg6QbIPkGKDlBqg9QZoO0HjipbNYAgAYKMEmD-IZgiwarGsG2DVA9gxwWFGcGuD3Bng7wb4P8HiBAhwQ0IeEMiHiBohsQ+IYkOSGpD0hmQ7IbkPyGFDKKdAEoRRHKEWBKhiQaobUNr4NCmhLQnAPsQ6FdCehfQgYUMJGFjDQFkw2MdMIuhzCFhgsJYSsPNhrDKoGwrYTsL2EHCjhJws4RcKuE3CYAdwh4UnwOjPDXh2PD4S2G+G-D+zAIoERLyxlgj0RkI6EbCPhGIjkRqI1EhiKxEWtcR+IlyZPOJGkivo5IrqJSJArPLaR77BkUyJZFsiORXInynQF5HUB+Rgo4UaKPFGSi15MouUQqIsBKiVRao2SG4WWrajFMeog0UaOcgmj-IZo5bJaM8K0LbR9osCM5CdGc0uoro90Z6O9HmxfRMQpAAGI1zBjdZI08MUkhyRxZrYsYiAPGMTE-xkxr3NMSzUYhZjEgOYtTvmNMVFiSxZY0jZWOrFfi6xFCsqI2ObEd3CgbYjsbIm7G9j+xg44cbRTHETipxoqWcQIgXFLiVxa4jcVuJ3F7i4AB4oPpIGPGnjzx0gS8deMqB3iHxT4l8W+LrHYw6K340lMoKAgATyAQEi+VNzAlJdIJMIzYbBPgmISBAyE1CehMwnZBGhuE-CRXbJhESSJpPciZRJeuSS1CP0OifOvSiMTmJTzNidgA4lcSeJfEgSc5CElHKC4Yk3GpJMgyQxcAsk+SUgEUn+RlJRw+iupJ0BaSdJekgyUZJMlXdzJ60SydZMSC2T7JKQpyS5MoBuTLoHkryT5L8kBS4AQUkKRNQfG3dIpcgaKbFPIDxTEpyU1KYFHSmZTp2+UHKeIvqwFTCxbQYqfIjKkVTlAVUmqXVIamKPmprU9qZ1O6m9TaK0gAaUNJGlg9xpk06aRbjmmqAFpS0laWtNtibTtpu0tUR53yiHTjpp06QOdM2I3wrpl0G6bosqj3TJ+IAJ6WjR-BvS2gH09aF9JJBlBfpFgf6dLL-LAzQZ4M-8VDJhlwzgBiM6gMjKwpoyYAGMrGdNVeh4yKOhM4mYLg-XkzKZ5sambTLvYMymZLMtmZmzKCczuZvM-mcy5InVRhZos8WWCalkyy5ZCszmcrIUBqzJomsuwDrL1kGyjZJss2YzILZWybZds86I7MKDOzXZ7sz2YzG9m+zcg-ssKIHODmhzGo4cyOW5BjlxzkwjUROa6JTlij05mcyznIBzl5ygYBcpdoUGLmlzy5OgKubTtrmfcG5Tcyda3Pbmdzu5ZUXuf3Mg1DzEgI8seRPKnkKpZ5XUeeYvP+Ary15G8reTvMZDUB95h89KMfPWVnyR2l8tINfIIC3z75CAR+TmpflvyP5X8n+YFD-mDBxpQCsGCArAUQAIF4gKBZVBgUwz4FIU412O0k2oLBMiKbflgpwV4K4s9QZRJgGIWkKfo5CyhdQvAh0LepZMRhYlBYVz92FDLk7p9Z4WMr+Fgi4RaIvEUkBJFFgaRbIvkWEZiQSizNNIFUV4bOhmi7RYCF0X6LKibQIxSYrMVZQLFVizBbYukD2KxuKC5xa4r4UeKvFPimAH4oCVBLqoISrLpdHCWRKWi0qy6LEviWJLklqSrgEh0yWNRsl-wvJQUug-FLAQpSsWTcUqXBRqltSgQPUukGAdMAzS1pe0qM9dLZbvSsVQpq6iDKdcIy9ImkHGWJBJlDQGZW304DzL-uSylZWso2Xf4vo2y3ZQ1YOVHKTl3eG2D7PDYVTrlty5MF8IxSBDnlry8PB8rFXfLfl0cjTZEs6TlEQVYKubBCqhUBtCgsK+FYiuRUaQkAaKjFVirqK4q3ON8daISsKDEqagZKilWDCpU0q6VDKplSyrZUcrZu3K6mnyrKgCqhVIqoCeKslXSrDYgMITpjMVUksVVaqjVVqsUnYBdVbcyA4aqMmWzEuZqlYdpKtVU-5ElAO1Q6rAAnVA6BdU3VD1X6BvVfdD9VioANSDUQ1OsRdICACNR3VMoWXjugIAONToAE1JNTc4xFNNWgp2hLNXgBc1fNVpg4uYtXGhS1U7kCgK1U-hescIWtS9QG1JtRbVP5V8Q7VmBV32FZKAXtX7VK5IdRHUx1dtUnUBUGdTnUF1KTjSBl1RmFXVqNAaA3VFlBAG3Vd1fdUPUgYY9Xs8z1VNiRVWoQ4xvU71B9SfUX1AgDfUP1ADzoBv1X9SKU8oQDTugg2GmAkE4XCDSg0bFMFlAp4NQEEQ0lvFDWVZ0NCwEw1lsSQBw0tofDUI1j1UjW9kqHSjWo1lORR3o1qoRjSwoWNRIDY0r+T6AQAuNdpRCI+NATRCIw8ETTE0iUXJSk0kudsUdl5NRTWU1VNaNmcgNNXFhgBtNXTX00foQzTAhxFQKFM0mAczUs1rNDGFyA7NAgAc0nNRIBc1iQNzQ810oLzR80wINzAC0gtSShC14UDMFDRotW-ELBiwUsHLBKwKeGrBawesEbBmwWrHK0C0HsCq0S0G1BpoK0KcAZpqUfWjpRWtZ5G3AYwX5E5Q+tZCmLwGLMvBG1vsZi2UZWLSxi3MSLbiyIsZMWVC21mAF7X9Qp4RCCMBkIVCHQhMIN7S4oCIUTFng-tMI0B0IjUSAkgpIGSDkgFIaLESYWmH+DhBtQDel0hXIdyG50-IIKD51IoaKGvQhdBKCSgUoNKEygPeSXUKgSocqCqhaoeqFzBFdNqA6huoXqEGhhoUaAmgpoGaDmgFoJaBWg1oTaG2gTdI6BOgzoC6Guhboe6Eehnoe3Q+hvoP6FlVXdCGChgYYOGARgkYFGDRgMYLGBxgg9QmGJhSYcPUphqYWmHpgmYFmDZgOYLmB5g+YAWCFgRYcPXT0pYGWGz1FYZWFVh1YTWG1hi9fWFL0TYM2EtgzlavUdhnYV2Eb0vYH2D9gA4IOE71w4WIR7144ZyETgfIIfQzgCAUfWzgsGdbAn0+DciGn1AMYDGosZyR4NjBxKBwGP1WmXSlJD34Z+gWRIEaBF7DULG0xgQAAAuMociSkE4BUzIBFHD5kJZCDBELa-GdMULBcIG0MLIMgUZRtL0yrw-cPC1rw1Gf8BCRpUG+HCRR4QCwotZ4RsILwwcRxHeCOGTCw3Dvgtc1+CLGTc3PhgQz8AlRPKXi34thmISzGZRLKZjUgZmSSyQAFmSCVksf4YggUtNmbZlUt1LfJk0tTmc5kuYRFPS1uZ7mR5hMsupMyy+Z0oH5j+YAWKXlsswWCFihZKNJywRY4AJFjctiQdFkxZsWXFnxZCWYllJZ9oQK2pZaWelgisWWNlg5YuWHlkjl4rKzUStjFZK0lZpWdK0BB5WLKxVZVANVg1YtWHVhWpCrQ1mNZTWfZTKtrWSqweZqrZ1jqsPWL1h9YWrNq2DZQ2Lq0jZo2WNnjZEgRNmTZU2GAHTZM2WQHGt82QtmLZS2ctkrZq2WtnrZG2FazWt7mDax7ZtrftkHZ9rMdgnYp2U6znYQABdiMAl2FdmusN2LdkZF7rA9iPZnrV60vZr2fGE+t72R9l+s32D9i-Yf2P9hJAQbUfjBsIOZeShs4OBDiQ4UOaaARtcgLDhw5GoPDgI4iOMKBI4BAMjkxsqOTqTo48bJjnSgWOZOyJtAQLjlJs+OZQAE4hOETjE4abaTnpsFOJThU5oCFmySk2bPTgM5CMLmzM4LOKzn5s7OBzic4XONzif4xbHzj84AuZVRls5bMLgQEouGLji5tABLiS5VAFLjS4MuLLhy5dbfLkK5iuWsCNtyuU2xq4C4S2wZxrbW23EBWudrk65uuXrhIB+uQbjjV3bcbkm5puH2yaA-bJbkDtg7DbjgAtucOz24wAA7iO4TuM7kop47G7ju475VO2e4M7d7k+4LAb7lzt-uQHkLsweCHlLty7SuwR4BAJHlrs0Seu3IdG7PHhbs27EnjJ5RASnmp4+7BggHsmeFnjZ4OeCojHs6APnmdlJ7IXiMAReMXjnspeGXjl4FeIxxXtVedXmchNebLy3sxcHeyN4TeM3gt4j7G3jt4HeMKCd4mIC+3d5PeIwG95feRqH9577YMEftQ+SJhft+wN+zj4E+JPhT40+X+yz4c+PPgL4-bYBxL5WrMBwaIIHOvmgdm+Vvnb5O+bvjVhkHVBzJhh+DB3H5J+Zvlwc5+BfjB5CHNfhIdy+MhwodD+Y+Rodz+MmEv5r+W-nv4WHF-jf4P+L-h-4-+AAXIAgBEATAEIBUR1gEJHRAQYJpHVATkcsBCokUc8BSQAIFVHdR1IF-IcgX8hKBagT0cGwAx0YFmBVgXYFOBbgUsc+BGxyEERBMQWccpBGQTkEFBEgCUEVBNQQ0E-vXx10EAnIJzgBjBUwXIBzBXIEsFInOwQcEP0OJxcE3BIlCScfBDjlSd0nEIRw4snDRRycYhOIQSEkhc4SKcMhLIUhgynAoQOgihKp1KFanep0acywZp1-ZWnVoQ6dOhaMG6d+hQYTKhhhUYXGEhnBFhmExnRYR+hlhVYTA9ZnGAE2FthXYX2FDhY4Ro5VnIjUSBrhY2E2dIZbZyeEXhN4UOcvhH4VtFTnPIXOcQRK5whEoRbQBhE4RNoAREkRJABRE0RF52xF3nJLk+ciREkTJEKRXQEBcaROkVBdmRTKQhdORZyG5EYXPkTAkEXYOCRd8oCUWCgpRNF3lFFRSQGVFC2HFw1F8XHUSJdDRY0VNFzRKl2tFaXB0QZcwoZ0WZc3RD0QYR2XTl39ELAQMT5dQxQV0jERXGMTjEExJMT1wZXbqDldMxbMWUBcxFV0LFixNoFLFyxLVxrFdXBsSbEkkI1xNdOxc12DZLXIcUzAbXccUnFpxR13nFFlF10ZhVxVX3dc7lXcUoB9xWY19d-XM8T6gLxYFhDdbxOAHvFHxZ8VfEBod8RjcvxH8QTd-xZdmTdgJNN3AlM3aCRzcEJP73zcEAFCToA0JDCVkgS3HCWeZy3QiT6hiJUiVrcqJBt1olLQFtzbcWJTt27csuXt34kswAd2Elh3OUVHcpJCdyncFJJSRCIF3NSQ0kV3AVjXdN5DdykEt3CySskbJOyWlgj3OJhPcz3C928lfJZHRvc73UKUfcIpL6CikYpOKQSkkAJKRSk0pecT-dspPKCA98pQqTA8SpSD0qlqpDRDg9GpRD0wA2pH6A6kaOVDz6kMPA6EGks1bDzGkJpCwCmlqAGaUI9iPNlVI9YY8j1-ZKPPaRo86PE6TOlaPZj0HVrpW6U48HpHj2el+Pd6UwDhPb6TE9YWCTzkAAZaTz59ZPFKHk9oZWGXhkVPNT1Rl0ZeTW08cZPTwJkQAImRJljPdANM9zPMmDpkrPZmVZkcUOzwc8zkpzwFlXPdzzFkJZbz1ll5ZRWQC9VZdWRC9tZQKF1kuNCLxUAovc2Vi9rZW2RuJEvJ2Rdk3ZTAA9kvZH2T9kA5QcXy9AQMOWZlivaOTooyvBOSTlqvNOXD46vbOToBc5fOVAFWvdrzLkK5brxrlVaPr0blm5IbzCgO5Dy1G9xvHbkm9h5LKFHlJAceUI55vGeTnkF5JeTW915TeW3ld5HbwPlKAI+RPkjvC+Svkb5fTku9rvZ+Vfkcne70kBv5X+X-lXvMoGAVQFcBREUfvaZz+9YFQH0QUQfFBTQUIfTBUBBsFNoFwU-gWH0IUEfEhUjlkfdaAoUwAKhRoUMfBhXNgmFXHzYUOFQn24USAXhVJ9xoIRQmoKfCRR+8afYkBkULYen0UVlFFnzUV2fLRUGwufPRQMU+faagF9gocxUsV76UX0BA7FCKUl8nFFxTcU5fbQQV8lfQJWCVQlDXw9QtfaJV18wYOJVUAElZQCSUUlNJRN9AQLJRyVLfQnWt8SlMpQd8qlc1Jd83fRpU99cwb3w6VJAP3x6U-FQPwGUhlMPzGUJlKZVj85ldKAWUk-VZXWVNldPx7FM-fZUOVjlFYTz9zlQvyuU4AG5UoA7lMv0eVK-N5Rr8vlH5T+VG-QFRb9joNv0xpIVQIi78e-BFSRUKWAfyH8wATFWxUx-fFUn8iVElTn9KValS9Fl-LqEZUmstf3ZV8oTlS39eVPqH5V1oQVWFVXBQ-zmZj-GVTP95VS-2VVVVQaVv9tVB-wgkn-A1SNU3-U1XNUv-S3h-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-TJ5X+AW8-0lb2Xllldb2AytvPeXAzIMw73PkTvM7wu90oB+SflbvFDM-k0Mx72e8AFN7w+88MyBUIz-vOBUtYgfJBVB8KMjBSh9aMmHwIV4fRHxYyUfDjLR9aFehSx9eMnH1yBWFfH04UifETJJ8SAARXEzyfMRWkypFOTLp8FFRn2UzWfdRQ58NM7n20z+fUcUF9hfIzJsUTM8XzMzHFaXyszbBeX1MRFffxXszVfRzM18olHXz19PMg318zjfDJQCyzfILPyUQsopTCz7fCpUiyalNCVd8GlD3y99lOH306UQAbpQD9+lYPwyzRlCP2yyY-MAFmV4-fLMT8gYZZSKzU-LZTKy9lbPyqzTlfPwuUi-BrJL97lcvyeUXldrM+U6-brIBVm-YFX6yvpdvyGzoVbvzzZe-cbJRVB-KjWH9ZsvFQn8p-Gf1JUgJef0X81s36BX8ts4NnX9dszfx5Ud-Pf1OzRVI-2xAT-WVXP8FVJVWv8Hs-Nzv8dVF7P1UX-Y1Xf8vsy1R+ybVP-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-Qb-6lBsQfR7rIFgY2GAKPoaGBsB89GWGzIU0A+RK+tgaGHxILQRgBkBoxDkHeCPQcdQMByoluHvB9HqwIGCYQfkQghoiAwH8KP-tEGTh8QlyHhBgQCcG-+2Y0yH5BwEZoJ+Bn1CQHsUKACxHzAB4er6oAIIYUQKQLEcKADDRg3GZmMbNlv7xme-rkAlDCD2r6TEP-rf7-4T-o-6+AL-quJkwKRFUGoABEegGzAagFKJxITghxHRR0cGMHK+qABnQ-+-kbZo-++0FFHTQLEfuGTBkAdFHVhoIfPRagaAclIKQPUeMQpRhwfR7qAP0BIGlB6oZeHzRrAiJAAh7-H5G0BvQFtHzABoYshMh0PBMHRRv-sXBlh0PFqAsCL-McHQBvXj-7cQdHoyALR30GWH+hl4eQGKQbAb+H+B80fR7PRiMYaHtR3-pcI9B6AfYGkB9sFwJv8XkaNH8Rj5GSHQBgClBIL+pgypGb+hUzv7FqBkdKkmR0AbYBWR1SE5GORkfoP7V5aJ0tJ84JdEYhGqbkeTB5RwAaqBTQNUbwHcjMdA+RJx40bwHZxqP1yMK++0BxH1R2wcx1jBzdBsGFx2ocSAyIS-trGaR10EbHGRzHVbH2x9kf-gbTISFvHa9e8YHCnxsIs2QtqcIvuwbsaFAGL16CFBotXccYsG0Psajs9MeGMxjm18LZPADM4zYrH7Yhyb1F7JxGIRjHIk0BjFHE9Oopk6QheAgBxLU+biEZ1iMOJlAjniDCYIAsJmw3wn0AH+GSZiJ4YriRAmEM0HxtycEAjNoQKM0PJaJ43qiKzyWIpTMje9My-No6KbWSK3KHMx4t0iws1rpizQKjcwyzUKhbpnQas0KLUKTunrNSixs0jpmzAelIp2zbKk7NuzCC17MoLMqiHMT8giG9Axzfim-GhiiIvDBqe902AmmLMix-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-V-mdyXA16ed6milglcEXSlkRZXnSVqpckXIjWNb3n412leaX6V1peUWU19Rdij01wWKwJOV7lZgQoAY-nSI8JzpHQwoAcgH+maQT8bGBwF7yZdx61n4Po7Ge3OYPDdVi5f1XyLP5aNXop9GaBWgl81bBXcF8JetXFAGFebn7V2JadWElmhaRX6FlFZqm2Z9mcAAEfcXWJ5ldYKW11kNYXmw17dfGnd1gCOjWD1nebjXGlk9cTWWlk+cZXL1llcxF01osGkAs1h9ZaQHF8nqmW6LfZc4Zw5uns1W5ipnpbXiLNtbEn4S38NGYRLFEvEtZmKSwf1sSuS1xKNmJS0JK9mEkqOYtLZCN0sqSwy0wi6St5gZKLLKy0IigWVkvssyImFk5KXLZFh5KPLeiO8smIvy1YjyWYUuCtOI8K3FKorPiNitBImUqFYkrBUvEi0rZUuki1S2SPki8rJSL1YdStSNKsDSiqyNKdIk0pdYzShq0MjmrK0vaszIu0t6srIwazsiRrJyOzYPSyazciZrTyPmsfIpaybYAyttkCjgyra1DK9rcMsOtjradmjKYouKISirrBMtutUo5Msetj2NMqyj3rXKOzKfrXMv+sSooG3KiiykDhLKIbGqPLL6ouGyajqy1qORtOotG16iMbZssGjcbNstGjCbTssmiSbHstmiKbBaOptBy5aJHLGbdaLU4JyraKnL2bXaKM45ynmyOily06OFsLojznXLroyW2lsdy+WyeiDylWw+ivojWx+jtbXLgBiDbYGOvKKuW8vBi6uKGMfK7beGMdtnbZGNds0Yr8oxivbGbj-KFuPGJW5gK0O224wKsmKjtKY2O2pjoK2mOTt6Y+CvTtEKlmLZjUKzmIwri7SHmwrcKqu0Fia7QivR4G7UiubtyK9u07tZYmioViGeZWOHs1YrnhYrNYie3Yq9Yme3F557Y2KXszY5XgtiN7G2OErt7MSr3snYw+ykq3Ys+y9j5K32P9jb7APhDi1K8OI0ro+d+xjiv7eOP0r-7ZOKAdi+UBzMqq+Cysgd6+ayrzi4HBByLje+RyrQcR+Vyuwdq4zyrril+HyuIc-K0h0CrQVYKo7i6HHuMYc+46KrYcOHYeO4deHceP4dJ4oR2njUq8R3SqF4zKrQFsqleJwF14zeMKqNHLR33idHGgX0dKq4x3PizHK+Pqr+BWx3sdHHcQRcdn49xzfjPHT+J8deqvQUCcBqgBJCcwnUBIidRq6J0gSnBGBMSdpqhBL8E5qjJ1QSlqqIUwT8nHBJSENq4pwISchHauITSEg6ooSTqqhLqEWnK6vacbqrp3uqWEvpw4TBnV6tGd3qvhIETpnIRN+qFnCROWdpEoGsuE5EjZy2dwavZzUToao500S-hM50Rq9ElGuudDE4xPudzEyxOec8amxMJqCRL50cTfnZxKpEgXdxOprwXOmp8S-EpmsCSWakUTZqwkiJK5qMXLFziT+azUQJddRYWpJcyXClwtEJazJOlr6XWWvyTWXIpMVqOXZWtKTyk9Wv5cwxLWqjFRXOpMlc5AaV1TFmko2raSOks2u6TekzV2tqBku2oNcRk1sWdrTXLsTdqpk6129q7XBZP9rlkwOrWT1xEOs9dtk7112SI6gN0OSg3Y5NjrTk85Ijcrkm5M-E43X8UTcnkjOteSM3HOpgk863N2+SC3f5KLcgU7CTLcK6qtyhTa6ut2olG3Zt2bqmJJFPbqUU7iW7r0UwSSxTRJHFMHrx3YeundZ3edwnqyU6et0lZ6wyXnrTJbd13cGUw9zXrnJDevclt6q9y5S96+9zCkn3AVJfchU99xFSxU791-dL6wDxvqQPIqUVTH65VNg9X6hD3frNU5D11Tv6-VMw9jUgBrNSLUq1NAabU5aUgayPGBq2k4G51IOkkGhjyY80Gtjx9TMG-1L48cGwT2DSRPH6XDTCG6NJBkSGiGQU9E05Tyob1PNNMxk6G3GQYbs03NKM8yZAtLYai0ktO4ay02zw5kBGnmSEbnPQWTc8xGzz0llJG5tL88lZWRo7SFG0L27TwvFRuNk1GmLw0b4vUdO0bkvCdLS8Z0rLxy88vExqXTCvFdPMb10yxvK9KvZOVsad0jOQcb90w9Oa9j0ouTcbOvSuU8ar07xoG8W5PxofSu5QJufSB5Kbxm9P0ubyibf0pb3-TVveJqAzNvUDN28IM-bygz0m2DPO94M7Jqu9cm5DPfkCm9DKe9MMwBWwz3vXDK+98M37yqaSM4H2QUwfdBUh9qM6H3ozWmohWYyyFNjNR8uM3pux9mFQZrx9BMrhWJ8+FCZrJ9JMmZqp8ZM2nwUzFmpnxUVVMjRXUydFLTN58tm0xX0yhfQzOsUxfCX2ObLM2XzOabMi5rsyVfNXzCVnM+5piV3M-X28zDfPzLebAsi3y+bClG3zt9ylR32d8gWmLNBb4s8FsSzksmFqD8Q-YZQRbI-aP2mUUWuPwT9FlTFuT9istPwz98WyrNz8zlAv0uVi-JrNL8HlCv2pbq-Wlq6yG-BlqBVW-FlsGzO-GFU5axs-v1RU+W6bJH8cVQVoJVFs2fzFaVspfylaNs1f1ladsvbMVbDs3f2Oz9-M7LFULs9Vquy5VC-x1b7s9VX1ansx-2Nb3sk1Q-8LVb-ytb--AHMACgckAIdawcp1p9UoAt1rgCw1RAK9aUAn1owCsAzHJTU8AjNUICbvMNoLUI2igKjaScytToCa1eNqpzm1JNtYD21VNo4Du1bgMza+A7NpZyhAvNo5zxApdWLbec8toUDK24XNFy1A8XNPVJcrQMvVdAptvvUW2hXKMCTAjtosD1cnttsC+2sDScC9c4dsNzR2k3N8D-AmduCCbc+drtzF2ijWXaYg1doY03czdo9y0gjIJ41sgv3KE18goPMKDT26TVKC5NS9qU1r26POqDagrTQTyH2gzRTyTNV9vTyegr9vs1f24YLzyxgwvOLzpg-zTLzgtcDsWCq8qDtWC689YLIA4OqsEQ69gpsE7y5wNDsq1i0PvOw6B83DpuDg6FcEI6HgkjueDyOt4JmXxV6TaOWwJrVfk29VhTZBDN8881e0oQvfLhCj8zCn4wNaa+BRDSINEPE6lZ4HQkgFO1pjwxX4d+EfyAEOw2wnGMaJzh19mFIzYhqQa+WOZ3kYkFekbbV6GcUvoNaCq4VwQ6QcFqoXERmJRZfmQRGgWc2EahS2PTkJB8UEgD6g2ARORxRTapKADhugQaR4d9MgaGoA5A3jI1h56ZyDBh9NXIFnUkUAVLBgBoC1m5UjARmFt4gYDqfoMgsZjCAp-hcfQu7WMf9Cu7gMQ25WhawDAGcgeDSfQcBb82G+JD4b-SiRv0MJtiQIEIIpG1AhIf+EdMhln9arXV6Gtf-WHEFxdeu5N0DeCnFNhGd+WO1-xbg3TVhDd7WkNsJfrmoVtDdtXolzDcdWqFnDZdXGZ5FcYXUV2dcAA9nbI3l1qeco3Z5jddDXhF5efo3I1vdfJWY1ljaPW2N9ac43k1jpfUW0SG9ZoghNx+YABqeREyRhCD5AyBJxtmhFXXxsVYOXnryVaLnpViCFlXE59yYnN-b6yccW1V6ZbdNp7uZdo7ZNhjoItPrj66cmVNwSzU3kSyZk02QIsCKWYcStZjxKYIlSyJL4I0zfJKUI65n0srN2ktMs7NvCMssCImy2c3SIxy3c2qI1yy83PLBiJ8tmI-yzYigtkKzCsGWMLd4iYrASL5ZotkSNFY4t1KxlYMrBVmS2crBSPytlIzLZKsNInLZtY8th1gK39I4rYtLjI60o6sw2SrYdKBrGyKGt7IxyLGtGtqa3cjZrLyIWtfI5ay62gyza17ZQogbYOtIok61G3zreKMutV2G6xSid2WbYyiFtjMqW3b2fKNW2-rYqMBsyogDm22qovbbLLobQ7cai0OE7drKOo1G26j0bcjmu2aOVsvxt7tjso44nt7srJtXtvssWjPtum2+21o5m3+2tOQHZnK9o0HcOi+bCHaFtzo0W1h2JbW6KC5ZbXcuR2Xo1HePKMd08t+idbC8tx3SuY2wJ2quInchiGuG2yfK4Yh20RiXbVGOG5adz2yxjGd3GIDsWdkOyJiw7DnfJjo7KmIu4+dxOzpiHuNOxe4Rd7Ox+5xdgu0l2eYmXYrs8K+XYIq67Yiqx4Vd-HjV3pYruzlje7OisViGKvXdHtDdrWIF4p7U3c4qLdniuXsbdte0tjrY7Xgd3RK3e0diD7S3jd3T7D2PPsvd6+wDig41SqftA91+y0qP7WOO-t0+P+yTjAHVOJj3TK8BwT2rKxvhT2C4xB2LjM95yuz3MHXPY8q8HAvYbji9-yu34y9yh2odQqqvYira91h0HjOHEeJ4cx4ieMEdhHSAU724BbveQEZHPvYwEB9teOUdCBNRyKqx9g+N0dyqsadPiTHC+PMceBKx0X2mqlfcfjXHF+I8cP47x2-jd9v+IP3AE0J2ATwnKwTP2YnKBImrr9rwVv2kE+asycn9jBLydsEwpw-2tqwhJ-2KnYoXISjqyhLOrqEi6saFQDtoU6cmEyA96c2E-p04S4D2YQQOJnL6sET1hERPmdxEpZykTThLA-WcFEvA52cCDqGphqSD7RMBFyDy50oODE25xMSzEx5ysTGDt52YP7EkmvYOyazg7cSQXHg68S+DqFx5EAkgUWEOQksQ9RcJD6JNiTVRGQ8STCXBQ9STyXdJNUOaXdQ8dFckplxZdCkr0V0OSk7lzKTeXIw8qTTDmpN1r6kqV0aSbD9MXld7D5V0cP1XPpNcOdXdw4drRk7w9dqLXD2umSRxW13mSHXEI8XEwj4Oo9dpoMOtiO-XSOsDdg3ZI7DcLkyN2uTo3TI9TqcjwCReTQJN5MKPPkvNzKOAU4tyqPy6it1qOa3eo-rqmjputbcW6to-YlO6zo94lujzFKHc+j8STHdpJSdxHqZ3IlJUlF3cY9Xcpj6lNmOl6hY9Xrj3FY63rL3TlP8lNjg+p2PBUt9w-dRUr9wlSMpU4+vrgPO+quPypG45fr4PJqQeOtUnVOwiepV47-r3jnD0+PgG61PAa-jqBvWkKPYE+o9QT+j3dSLpFj3Qa7pP1N48XpATyE8kTsNL+lI0qTyBkY0jE-jTFPJNNxPU0zT3TTCTrNIM8808k4plKTjhupPGZWk4rT6TxzyZORG1k489G0zk989W03k+C9+TrtJ7T9ZYU4HSxTuLxHT7ZJLxS9J06dIy9Z07L3nSg5JU+XSI5NU9jkNTzdKq8dT2r31OGvA9Ka8WvE0469z0i07rl+vW9NtOAmnuWCaX00Jum9302b2-T3Txb2W8AMn0428QM7bwDPUm0+RDPTvODLvkIzxDLyaYzh7wwyXvRM5wzPvb73TPiMmptIzszhprzOaMujPwU4fYs6R9OmzjPR9Kz-purOhmus9GbRMps6maWzyn2p8OzuRS7Plm3s7WaBznn0MVdM7ZtHPdmic4OapzqXxnP3FOc+8UFzq5qXPbm1c+191zjzK8yfMo33SVTfc31yUDz0LNt9ws-5qd8os885BamlK87aUbzqFv99Us2FofPMsxFqj8cst87yyCsr8+xaSsv86z8AL6rKAuSW+rMazmsiC6paq-d5Rgv6-f5Sb8EL5lvBU2WkbLQu+-CbMwv0VbC4Fbx-fC+n8lsoi4X9Vs2lVIvNs5lQouN-LlWoujsk7IP9GLiVWYvT-Vi+1ar-Di8ez7-Hi+f8+Ls1s-8LW61V-8RL21uBzXVSS89UIAl1v9UYc2APhz4Az1sjVlLtANUv0c7AI0ug27S-xy9LotUjay1agNJzY20y8YDzLmnJTa02uy8ZzHL4dWcuJ1Vy7ECucjy5XVS22QPkCt1QXL8vVA9QKCupc0K8bb9AyK8VzjA5XNiuu2-9RsDgNewOSvB2mDTcD0r43PHbTc83Kw1Ag2dryuiNEjUKvHckq7iD1293O3bPc6q59ycg+q+Pamr4oPPa2rioM6uY8nq-jydNfq+TzWgoa7M132jPJs0+g79pzzJr-9vGDJgkvPmusl2FAg6lg6vOg71r2Dqbz4O1vN2uDgl3kKtD3ljrjVpy0Gddrgk1oR8kR0x8juA7rq8EsFrMs58rvdG1m9cw7j8t3whto5UOCFOOjvkeOvvl+OkmhnqNWAsKOeFwbmJ191liFQdDiEIdPiEYdDhhr2ORBJAISFFOg7d34IF0WwLMJCwvoRdupSEQuqAVaQhF1YoFF1RdKyEJdPF0ZdDyF5dPyEUukKFVdKKENdBKFtdNKE9dHKFDdIqFCumbpVQpboNQjbptQlQVHdPqEXdLV1jQp7ozQj7pLQv7obQm117QmHpOujwUY9O6F49F6Ek9L6FU9AGERusGFxulIVwwgXoowrN1FCvN1K9LbAlunXpUwmt0Mwq3oswh3ptunmFdusYVUAAAAqMGBlQMsIWFM7qsQA24bLY25z6RwAqGdsLEhM-Re3R+aqrOtab3CYpPXHe5bhVAGh3A+5gbfOY-LQCwn3REr-hDTZARdErabGSy33aCKGbR+7GbDSxklbSxv3NCLUlIyxPMGzY4Rezb-3Fkp2WIB4clZyygPTzbuWCB6+bAUowPQLZBWeB5ilSKzIPKUpRbBKxylTB7iseLY4PFUp4PJVgpbTUpEPDLZFWLLZkPcqwUPO1j5bGqyFbeqyNWIyJlbG0pMPbqxVbR0o1bF0qcPd0oTWHh4tbH0oCPDrb+RQMo9bUR4hRXaxDsQbZSPEbazsWR4TbBR6JlGbYPWVR6nsdR45RTR7fWJ9hrbXR4FlLbag2XbaQ2A7aw2cx7NRU7Z1lc7a2PS7b2PLGw3bejh3bMaJscR7ZTRF7ZzRSmw+PSThfbBmwBPccoacAHbTlDmxhPbmwRPRcoC2SHYxPNcpecOHYJPe6LJPRWypPN6Kq2T6Lq2TWxZPbHb62IGJ5PUGKE7c2wQxB8qlPMnYVPN8pVPT8qjcOnb1PX2wAVfGKs7Vp7s7COyc7CCpdPGmK9PAXb9PBCqZ2UXYoVPOwS7IuwTPMuw4VKZ5y7IWKK7UWILPJuxLPVuwUVDXbUVeWIbPHXZD2VWI7PHnhG7NioHPfWKz2LioL2E2KnPfioXPISoiVfXi3PCSqu7Y+zu7Z56e7S+ze7JSofPf3ZfPcPhB7KOJ-PMPZ6VIF6GVaPYmVMvhx7bOJQOZPawOWF7p7EuJOVcuI57dyo1xLyqF7Ihzr8EvYBVchxBVKhztxfF5dxehy9xZhx17El6N7BKot7JKrt7FKpiOOl6SOHvaMvZeIKOPKrD7Dl6j7Eqrj7MqpT7Qxwz7GqpCva+INVJfb3xJxytVSV4b7Tqrb7OV5+OPfb-xJV7H7EapRODV6X7BJxwJG-YpOe-YLVNBLP7Y15rVd-abVEpwWvPIS-7fao2vCoSAHe17AHS6ptOF163VZhIevJ6revYZxvVeYSIHb6ooHYN5-VdA7hvGRLYHEGqKJe4T4HSGrvCIg4aJE5zw1ZN7AiVN5lAVGrUHDGpZvbGo5vTERMHD5zE1Ng5-OAFwU1bg5guCt7sifg6M1Gt5BJEQ7IucJKNvdFzNvPmq4uWQ5C1YlxdvZQ4ZJPt50uAd55JYd4K1JWp+iCd6GHDWomHIVxmHWpLiuBd5WHJd6G1Vd6KudpLrvVVxOHS2r9JHd56uDw6O1MZJmuPw7HvAI5nvX2qLJAOquudZKRHO97RHcOqPveI7R1E5JvvNI5J1W5JZHB5Lp1f95Z1d5K51fOogfIurlHEurApao5QfKup1HOur1uBurNHRD6tHDtztHVD5opftx91bFI4fIer4fYY5EfElKT1clKTHddwzHWlI7uelL7uRlIOSWj6nuTerspdY5MfW9z71B9yH1XY7H1A46n1Y44X1f9xnHfj6gee+pKpaDwqpWqR3HMT4tSR46f1Z47SfdDxvHYaQfHPDyWpAjw-HZT52pNT6wNHaQgnRBrafFBq6fL1JQnDBqGfbBomfRE74NFE6WfIho2fOTxkNez44nVTzUNfE4Zpehr4ydz5knVhpUyHz5cNPz42eAL78NIL7CNFzyiNML4SNaWRcnKL6BePk6KNQU7KNSLyinC2QpfLRrpfGU56NOU6GNRU4hyZU5mNErzqnKxpanbdKVfLOTVfQ051fVxoNfDxo9eS04tfXxrDeR9IOnTr5OnMJp9fSJrTyQb5enOJqryX05jfZJp7eA7xTfY7yhnLJo5NG7zRnVDJxnYppYZdb7lNAjLQKbb4IKLM71NcHyNNfM7NNQs4nfJjJnfMs5dNCs6Y+Ks78ZYZpCZBs5iZCTIiKVs6vfeZqdnBnzdnFTJs+Ps6c+DZpDnf74jnAzIi+fZqmZBxRg-GXwQ-TxTznXxQw-BzLq+O5oI-NzJI-Z5qo-fzJ7nTH5W+H5o4-P5qnnAn51KIn5xZFpTXnX3zk-FLJ9Ke87wtcPzPnen6otD86FZFPys-PFrs-HPyc-Ylp1ZUC58-SlptZaC61+WC6i-XrJMtUFRIXDvzDZVC5wqdC5y-XloK-GbKj+PC4LZVX6EXclTEXSVr0qMi4ytVlSUXBVrb+Gi7KtE35qtKVQsXLVq3ZXVqcXTVTcXI1oO-V-z8Xc1pCXN342tMS52tL37uqKS6+-WS4B-d1rB-RS6h-aNTh-P1pR-QNr4BYNpEBUNokBQnKJ-aNop-Ey4U5BNoWXZNrWXbP4M5By6DqJy6CBQv4iBNy4l-Itpl-MtqV-AXLKBEXK1-QK51taXJhXZv6PqKK5ttFXKdtSwJd-Xtq9-HXLOBAf4G5BDTD-VDRZXadoT-XK4EafK4z-CIJFXaIK0aBf7lXVjTL-Kq57tWq6HtAPIFBCTTb-Vq4R5Dq4qaLq63tOoL3tJoJPtVPLDXS-6jXG-7jXIYIjBaa6AdWa4gdBa7zBJa6V5ZYI15GDobBX-7bXXYLt5Pa6odbvInBUAGloU671aQfJ4dS64taUfJOFSfIUdSTb3hZAHVAkO773ZfIQbQ+5YAsEI+oXAGtAfAEA3ATrd0YG6kAkTrkAy-IN3KTrUAmToP5AkIMAnABPEWSzjMdG4DTAliUQNiApwc2CFAFOD+QapAMYDgFyALgGGQDnR8AkAq86cLr0hYQHC6aLpiAuApS6BLpSA5AoChVLryAzAqZdZQG4FXLrqAwgr7QIrraAsgpldfQGVdGgrGAt3SmAxgqNdSwGsFVrrB6WwFcFSPQuhRwG9dAQquAwboiFDPReAyQq56XwHTdOQol6QIHxhYIFJhZbrqFNMLrdKIGbdHMI7daOBGFfbrJA1IHlhfW6T6Q251hOwp5ArvqNI924zqFpF-TQGYMYYoF2zUoEAbcoGATKTZVA0Ca4WWoFpIlZaR3JoHAIH8Kn3JErjMNoFolLTaYlHTY33PTZ33AzYElPoHElAYFmbCkrv3dCJjArCK2bcyy-3BzYAPWYHslNzYLA7krLAnzb8laB4BbdiLBbUUqhbHYGSlSLZoPA4GxbY4HYPSSJJbC4EEPNLbalW4GkPfUoPA7SJUPF4E0Pd4GlbVqwMPCrY-Alh5Oldh51bLh7Ag5rbelfh7tbf0qrWKEEdsXrZiPOEHhRIbZRlZEGxlOR7xlRR5JlTEGplbEFvWXEF5RfEGFRdbZ6PQsqkg8Gzkg0x6UgqsqI2NqLWPBsp2PfqItlW7bOPNkETRTkGePbkHvbAcp8gvx4Cgscp-bYUHBPUUHA7faJg7SJ7Sg6J6rlGHbyg+J5blRJ4PRPcrPRZWxqgtHaagzHbnlHHZ6gkGI3lQp5Gg4nYlPGGLlPV8qU7D8o07a0F1PX8p2g5nZAVFp6gVF0EdPbnZQVK7j87OCoDPJmJIVMXYBgsZ5BgrCohg2XYCxCMFzPZXYxgyWLxgqird2JMF08TZ667NMHMVDMF7PHWIcVXMHHPAsHW7IsF27K56lg+2LO7e54uxaSoe7OSp1gt56+7YOJB8APYtgn54h7HSoAvBOKR7EF7GVdOJ9giF6WVQcHQvYcF2VOF4Z7FBzjglyrIvKcH57AhxF7ecFYvFuLLgvF60OdcHV7SKr9xevZxVMl7N7Sl7JVGl7HgueIZVc8H97S8FD7Aqo3gneJ7xbl6T7CqpPg6qqCvefYivW+J2OT8Gr7NqpSvTfYyvbqo-xPqr77QwSH7IaqqvcBLn7capX7aCE6vWCFpOfV6P7bJwrVV-amvVCFf7IhJWvMhI1OW164QmoQOvEA6EQhhIQHXoRQHT14wHF6oUQ+A5UQ-15IHH6p0QtA5hvQGprOHA7RvMGqxvDiHqJWGqkHBGr8Q5GqCQqg4ZvWg7ZvBg4SQvN5SQ1g4-OWSHk1Lg5lvRSG01ZSFVvfxJwuIQ6IuUQ4c1SJKSHXmrSHfSHtveQ5GQ0WrdvcWpWiMyEy1Qd5y1bQ6jvGyEq1Sd5q1ByFVJbWrmHVyGWHaw6eQ1pLeQhw5+Qzd4uHKsRuHYKF7vLw4u1cKFHvAcQnvWZJBHC95OuUI7xQiI63vLZI7JQ8SpQqOqJHGOo3iTKGJ1T97J1O5LxuNOq5HAqGAfLNxFHEqGlHMqFgfSo5l1PCQ1HGqEwfOqGNHOFL0SJqGt1ZFJtQro4dQ3o4D1XD74pAj4jHceokfZdwTHSlLTHTdyL1caHL1KaHMpZY6zQ1Y4MfXepLQrY58pI+r7HDj5HHbj5SpK+q5SPaGXHCDzXHI6G3HUT4apCT5f1a6G-1I1J3Q+T4PQ747zSF6H-HaBrqfD6GafL6HINCE56ff6EGfbjxGfQNIInPBqieAhrgwtE6xpTE7kNBz5wwvE7OfAk46eIk7IwphoefNGHsNCzz0yGk7YwvhpVpRk74wlk71pdk5NpSL4yNcmExfSmHxfPtIinaLx0wzRqSnRmG6NLL4GNXL5GNfL7swwr6rpCxo8wmxqpyfmGONGr7ONE9KmnRr7iw5r4+NG07Sw+04dfPuRdfZ069fV079fZWExNYb7qw0b5JNMDLaw4M56wmb5hnOb6GwpDJ3eWM5FNBM6lNFM6bfSpo2w2ppkZHM6UZJppHfBjJtNEs6sZdjIXfHprew676+wu77CZB76TNIOFSZNs5zNeTLvfCOGffaOHffTTK-fHTLGKAH5JwvZqTnI5rpw05pZwqH45w5Xx5wlc4RKNc5Fwzc4o-Hc7o-T5qVwo864-WuGAteuHu+Yn5Nw0n4tw6FqU-DuGh+J85ItV869w9FqfnLFoDw385DwirIjwolq1ZEC5ktMC4UtVrJQXIX6zwkX49ZRlqIXSX4oXDlrrw2X48tKbI7w3C7K-feEitZbIa-Ei6nwnX7bZfX77ZJVp0XFVrnZM34Pwi35Pw9i43+Li52-D+FvZL+FO-QS6WtP+EABIAISXYBE+-Z1pgI2HLyXRHJKXGBGo5TAKR-dS4IIrS4htXS6kBBP4GXJP4xtLBFmXZgKWXWnI2XenIZtXgLEI-P6kItnL5tdy5UIkto0IitrV-atoBXWtrBXetoy5cK7y5Vv4xXMwJxXbtrd-LXL9tFK5DtQf4iIrwIj-cRHj-K3Jztaf725JdoKI53JlXRIIVXVRG7tTIL7tdf5HtbREh5Fq7h5dq5R5A-53tPq5mIwa4vtC-4WaK-5Z5W-4TXexEAdJ-5zXUDqLXOFDuIz-5rXevLeIsCy+IpDrf4FDpAA9Dq95MAF1aK1DnXKAEEde4LEdOAFxIh65b3ElFJIslEsWHOZ1A9JH1A6VCZIjjoXmXJH-XPjrwhIgFFI0G7sUC-LohJjZUAu-K0AuTr0A5AB1I5gEIQGSAoAfDDqQHIjcKfOA6wPpEDIngFQooLpUhUZH86cZGMhaAoxdcQGzIyQFIFZLpK6OQEYFDLpKAnAo5dNQEEFArrbIrQGkFUrp6AygqHIowE1dE5EMFBroWAlgotdW0LtdOwHcFe5E9dfgouAgbrCFDwFvI8QofIyboyFfwG-IsvT-IlQo16MIGrdJvSRAnQoxArvRxA74kJA2FFpA07rYMdADWFJFGbLBsIqGZkQPEkXCfwV4gvE+LA6wPFE8rAlFB3KnqPXbe6LEpRjAbFYmUo75ZKbGlF8WTDCqbBlEARS+4Yla+4QReSz33XoE7MJ+4mbRCJDAizYf3GkrjA7+5iopkqObYiIubYB6yosB7yovkpQPfzZClTYEhbRB4aoiLaoPISIxbeUp6opUq4PGSLGorUrEPM1F6lTSK5bJ4HWovSJFbO1GWlB1HlbW0rOovqysPZ0ocPN0oNbT1FelPh5tbP0pCPf1HdbQNEwg-rbwgyR6RlaR4Ro8bbyPJKLTbZR5xo+bYJozMrLbLR4EgnR75lTbYGPTNGllWqIVlI7YWPfNFnbGx6NlK7ZMgxx5lokaIVojkHPbatFvbfspLRBtGjlX7abRVtFA7WcoSghcrHRZcpQ7WJ79ozcoI7JJ5I7FUFjoo8oagk8pnlbJ4zoq8r5PMGKLo4p7QxMp4vlCnbvlanY1PLdE-lBna7opp77okCptPI9Fc7SCq87M9Gegi9E+g5mLDPdmJoVLmJS7XmKhg-mL4VYWJK7Eirvo5Z6UVVZ5a7ZMFKxVMFMVA3ZAY43bZgs3aGxfMFW7Piq27QSr27WDFO7O56SVKsFPPWSrexBSo+7ZSp+7TDHNgiOLB7bSr-PcPZdgqPagvXsGZxePbkYpPaUY2ypp7Byp0YrPYVxNyo4OZjHeVOcFNxbF5Lg8vYrgkKrcY8KqbgqKrEvWKqkvJvYUvVvZUvDvbiY+l6LxLKrMvGTFsvLeKcvO8FKYo+J8vKqoCvOfZ1VTTGNVbTHNVL8Fr7dqrSvLqo77QCEKvMzEgQlV4n7NV7gQi-bQJKCFTVezGzVRzEP7RaouYl-YmvdaoeY7aoYQ7zH-7PzFVCPCE0JJ17BY8A5uvMLGkQr16wHaLG+vWLGfVeLG0Q0RJJYgGqYHVLEsQmN4qJfZycQhN48Qsg75Y-RJo1Gg6Y1Og441axIVYompVY0mpyQurFU1BrHeJZrGCHWt7tYzSHiHHSE81Ft7xJAWpyHZJKKHMWoqHUbFS1cyE5JSyHy1HQ4zYgw5TvBbGzvHWoWHfWpNJFd4bYk2qdJc2rOHK2p7YoKFDJQ1xHYnw4TJd2pnYqKE+1YI7XYq963YjZJRHR7F7JJ94JHF97vY+OrvvdI5fvFOq-Y397PJVNwAfAo5A44D6g4v5Lg40uogpKHHVQyFKw4ho6wpRuqI4xFItQlD49uNHG91DHH9HLHFDHUeqjHfHFT1Mj4jQknFzHCaEr1aaHr1anH0fHeobHenEsfflJsfE+qcfM+onHHaF8fOVL7QwT5P1Y6Fqpe47nQoXFXQn+oGpMXEmpQBpfHJ6HS4kjyy4t6FAnBXEINV1LgnVBqq49jzq4rBpwnYGE645E4WfKNLWfdE5QwrE4UNZNLww83GIwq3GMNUk4sNCk7owh3GlpZ3GVpBk41pAmGhfcRocnEmE+4nk5+4+RoB4oU40wkPFDpCU5pfHRqZffRo5fBU7GNePEqnIr5cwkr7J48r6p4+xoCwpxpGnFxqnpM04XpLxqSwgvH+NGWHF4kJpl48JpunKvGenWJqAZOvH+nFJpBnNJrN4zJrhndvGLfE2Hd41b694jb5pnAfEA+Hb52w8jIOwg74FnY76MZdpqlnGfHdNbjJ9NPjI1nATIE+es5jNRs6r46Zovfds5hw7fFKZZnwrNNTKxwwc5-fY-GJwsc7Jw8-FpwizIZw6zI34y5p34m5r5w+H6uZR5rI-bc6vNd-H7nT-G-NE84AtaLINwsFpAEyFogE9uHpZcAldwyAm5ZNFpM-OAk-nXFo7Kf87IEmrLAXUlq8-cC5Tw7AkdZOlpwXMX59ZJeFEE1eEkErloYXLeH8tXeHUE4Vpq-I+H0Ek+HStXX4XwlgmG-Wi7G-Bi73wjVrXZNi7W-fglvwwQl6qT+GmtT7LO-X+F-ZSQniXe1oyE8HIyXV1rgIxQkh-ZAIqE31pqE-1pY5TS645ZBE6EtBH6EjBHGXcnLGExNp4IunLptey5WE5nK2Eov4FtbnKeXcv585Hy6uEhhE1tCXIN-Btqy5CK7sIvwnt-AImd-DXKJXfhEDtQRH65EdqiIidpj-S3KT-aREJE2f7FXRRFrtZRFbtdjRqIrIkaI-3INXE9q6Iwol7-QxElEkxFlEx9oVEtPJWIz9o2In9p2Iqa6NEoDrP-FomuItomQdFYKaoLxGbXHxHbBHa7+IwAEHXIJEYdE67gA8JHjE4fKTEmJG3XWYmIAyoHakoDZuLJZbsWDAGeLTYk-XLjq75GEIEA-YlA3EgFHE8-IQ3SgG35GgGydJG61IpgFCQW5bSQEtbqIAtgfEhOBfEwwg-E-gF-EiAqRdSZGiA2ApxdUEmIFJLoyAyEnoFdLqKA7ArZdVQH4FfLpKhFEkldXQEUFCrrUFLEmGhOrpmApgpNdKwFsFa5GcFR0J3I7rp8FZwH9dIQruA4bq0ksbr0k6Qp+AmbrMkpQoLdEIHsklboaFLknaFaIFbdPkkGFAUkwolIHCkhFE1hI271hXIEOAFQxgwMoBCIc2APMstYqkvXrvjd8Yys18YfjRVnvjMJgRMG5D2mL0h0MWhgPYbVkas7VlAAA', 'house', '1', 'sell', 5, 2, 1, 1, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.76130439305834', '-9.12427711197381', '5', '65_1725816260.jpg', '5', '5', '5', '5', 46, 'active', '5', '5', '5', '2', '1729535592'),
(67, 'MY house is better en sep12', 'DwBwfA1gVgFhAEEEEsCuz7vm4B6cQA', 'house', '1', 'sell', 5, 2, 1, 1, 1, '1', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.78440225175098', '-9.122766726227416', '5', '67_1726325627.jpg', '5', '5', '5', '5', 46, 'active', '5', '5', '5', '2', '1729450119'),
(68, 'Meu novo Prop', 'DwEwlgbgBAxgNgQwM5ILwCIAeBGbYCsATgHYC2UmCALgEwAsMhF2pAFgBwDmADEzhBADWAIyQUqcCAE9sYnDQBsggJw0E6AHwAoUJCjhCGBAFcqAe007w0eMjRYQAK0UK+uAiXKVaDN2y68zAIictiKKmqWutAGRqYWGsBIAA4IxLCIKBisVKRwALQpaRQAppiY7FLGFHTGCMn4zOwgymAKyhSCrCAKSCDMrHA0IKyczApUIEic7EFCohQAzMQAZhDJNMyOCtgVbiswVFLc1ZhOLnzU9IwUnABeEAjcXqysSBAA7sIUmFKk63cKHBjMllKQvNhBIIpDQzCBNMAwKQxkhCDAMI4kAB6KhgYh-GAlLHJYGcPHYkqkMy4mBmYjYpGcLFIUhgOAlKT5KQlOBwAB0ZJW6CgCDgVAw3N5wqxGgAZMRRMkANxQACEqqgwGZqWIGgACliAGoAUQAcgARACCSC11m0tsg9usGTsGBweCIZAoV18zH8PDcwQWmAk0lkzHCqnUTr0sXQJnMmgAsmZCAhwAgoABxSl49OZgAqiyglKgltICDTxCoJQdEBjMTAhnj8U0AAoS+QVsgSvpe7T6VRCMZZTBCeA4ErZdQ2SASkqzFAAJR1+1Yu1WPS2LJYdyerw+m44f2BfjzOShmShSORBv6JtxRMaADCloASpbnwXjW+AJIAZQLX9X3-AAuVcdHXR1NxsTJ7HdDwvW8a4-A4AM5hCcRJCvCMlCjKJnTjBMEiSHUXR3HI8kKMjMDKCoqhqOoGiaFo2g6TAuh6PoBiGEYxhwCYphmDDg2WNYNi2HY9mYA4jhOChzgUVxvR8I97keZ4KFed4vh+P4ASBEEwQhKEYThBFGXI+C7gAdjoalCGFVF0XQHIqGSJBQKxZkqBnGA+XKPkVmEGAQGIPliBKKgsSRBBOBKCkqUcMA+WSVhkixCBlBxYYsWwPKFDylYGBAVLiE4YVRXFdBAF4NwBZneFD4wBAKhWAwbAFGFVgSjATgcnazqoBlKB5UVJUtSKXUs2oadcTgOcF3yctKzSGsIOie9m2IhFJqs7JcgKXbaPKSpTlqepGhwZpWnaTpul6focEGYZRnGSZplmM9MMwMT1k2HBtl2dh9kOY5TkU5TkN9TB1KeF43k+b5yn05JAUwYFQXBZhTNheFEks7drLshynLRfb3M87ykF8mkAswIKQrCiKopiit4sSsxktS9LMuy3yYDygqioYfzknKyqxQwGrABmdxrmtagaup6vrqo66UNBGhUUnG7U0g0S1CFlEoEBgUx50zWU6lNmslTm0CoGwOgwRodbWEaIjW0SXbCf2qijro07GIulibvYziHp4l7+I697hK+0TVj+ySgZBuTwecJTLlUvhYc0zBtMRvT-lRwzMZM6FcYs5E9qwWz7KHUmXLcjyvJ8vy6YZ0Lwsi6LYvZrFKU5lK0oyrKcqJfKOqKhQxzKiqRUl2rABm9uWWra9A1agbrev6jfBuG0btYmnUvaHOlOA0RYJrP8qNeASkNCQYwwBrG0B9IRIsTdu8PafUjih9q5A61FijHXomdJil1sDXTYndLij1sDPT4m9ISn1sBBjkL9CSAMpLAxkqDeSZwM6Q0PDnB4cMtII10sjYuaMMbGWxhXcy+Nq6AMwHXEmUBnLkxblTGmYB-KBWCl3Zmvc2YJXfkPbmo8+bKEnkLbAKwFDCBKHPCW1UaqAD691eCs95Kx3qrfen9Jpyi1sqB2UAADqz4uElEIBAMAo5xxsgXOtQiD4Wx-29nBX2h0aIBwYpgc6zErqsVuhxe63Enq8VegJWOaCMFLETtg7AgNpI4FkmDBSxCs4oVuOQvOBdqG-FoaXBhOAcbMMRKwnxtdiYNy4WTIBFNW7U3bkIxm3cWZ9wkYPLmI9eY4nwIsQWU9FF0HaAAfRoNwbgIBJmKMWDZRYaiF4aMAJY7so7gfEcEqQAPBuAGd9nR69N7bxVorIaGtD7KmPnrAA8skEo6R-ypEJLAMw5BaR3DxKwTMVJhBsnzCWEsABHZ+qQQAIDcbGDx20vZkUAZRPxoCAkQODqE0OcCI7RKjigj6IlMHJP+qk3BqcslEIuCpPJMMCnwx0kjEpBl0ZGSxhUpheNqljDYRwhp3Dmm8LbrTDpIie6szir0pKw8eZjyoALSehVFlzlWVVDAezAB7+8ci5Zzd6bwPmYnWJiCx2LTE4koE5XFQXrDBTaj4SLeNdEAv2-iTqBOCVAmB4Tw5RMQTE6Ogl8Xx0JeJYlaS8EZIIenSlUM1K0sofSouTL6GsshOyquXLansPqY5RpTcqAtL4e0+mwimaip6Rzfp0q+YKBAKMhVSjlDsGVYvGqgAMvc1XoreysdVGM1mNW5U0VrxXIKkNMmpqaEHPhoF2PkJ2301A-GAlYJ1vwftCxsW1Pb-3SIi4B-sXVopCdAsJYdIkIKQbEmOqCCVJODcndJiiI3ZKjaQ-JGk6WFxoYmll5czIcoJhmnl2a+XN0poKgRHdi1dLEeK8tUqZE4kJLWoqygDhNuqoAPg3AA-u+205XbDHq17UfXWuoAAyCBHjEEhYQMACAsQG2HFSN+G5gBuxtZ4u1CLalIpAekMBgcgmQJDrAiJ8DI7ILiVewNN6k44JTvgtOT7M5Uuhrnd9xSUZ0O-Yw39aaa6ZvrkBppIHWn8MEUWzpoixX9z6XBwZVBq1IcUe0RtYt54qtqm2qATU15arwxcvVfbiMaAAEJ0jECbBKSAzBIAADRcJfnUQovZMxbq4UcdkGBaRwFTPbAAxIsRYyhlBKSVJoRorJiDxDfiY-Qi5CTVgnX2MsFYqxrS-vgH+sLN32ooru514Cg6Ho9Se0TOLxOXoDeg880mUmhrJYQiGuSVOxvzlQhlGmynJsqX+mpDr9OcOA3mgVbShXmZFd08RsHpF2eUNwRzKxFjcHwGh1VgBQfZw4NbV+HLn9tMWNKAxpMCEnZNWXsZRkjRccWOM1LjZqznnIuKLiBCBrrY3C1LO6nUov3YN91x6sXevPX6+J16fpErvWGh9CmKVKejWQt9caP2MpLsysu2nK4sPTXtwDjceGgZO+B4VJaLswckRW+DVAbI2Xu4sEo2AXvoD2YAQ-2Pv6POR2mUv3rkqlS9TKQGX0BZZy1AXLszZnsG4KVl8dIQAfNlDR6285iBgEXCsEoMBfm29++tS1d42F7k8Mpo8LA0Knim99S84Z5B4VvNa3+HGAFcb69jgbAn0VHsxSJ7FPrcUScm4ksnt7ZP3syQtnJQf6cUNW-Gz9LOk0-o55yvTPOc185M4WzuwvoPWclddmV+BaPyuFsIbgCuaqAAad1XnaDH+aufq37BXntm6NsYCdKosRQEWHQUfy+Sir7MDrZjvvrX+49IHunfpQ+BmmyGbCUewgx+jHHrrXjOMOu43u1PbqhOetPWJi9-qcc4eCcReJKcm4a1Oi2Fer6VeRS62pSrO5SKaOmnOzeWavO-K-OpmEGFmpal2Yutm-ed2Q+NANk+ANkCugA6uSADwf1Pl9rPt7j1vYB-v1vxt-hisJl6mer6nikAQXlgiGqSvJuSlARfjSgztXkzhtogVtqmqgdyuga3pge3qdp3lBlZhKlIgMkQUhqQeQVQbQV5vLCcp9n5hrsYifLruliUBgMICbIIJwBOsYJRvkEboQHlmOCsAcDAFbkmO+AAIoACqxoUAAAUrKJaCbGbCqJaFAP+IEbEYaABL+AWJaL9mOm-r1ljrxqirjj-iNtnkTrwQkjfgIRTvNpGrTi+uIbAWtgmnXlpmyigU3goQZhgcZgWqoZBpZmWgQX3nzPgMQULHoRQa5uohgDQXQWYbqhYXrBjkntkaUDjmnkNvjlnoTjwXnnwaUeTsXpTqXpUSQtnDAYUnUbXppmzk0Y3v+tzooYdvmmBmZmoT0fgTZv0UMkMVPCMQYVMTPuYd7sfqjqfohAeMcceFfqTpHteI-gRDChuk+HqCtFABWGAGIHiCsKmBWKauarKNSPDkqAlO8tWCbL5O4ajvHjtJkcwcnjkcsewRnpwX-mNgASTlJoXjJmASXo+jTkcdSqpozupggfXuzlUjcTuPtrykZkdlgR3t0XgaLm8doXzCAOwPdnQCsDQGPoAE87vx6uMx6Rygiw2AUARWNkm+3ACgUAbYHuCAFYkKUAI6mYmYhAZqvYpAuJURNsEAPIUAxAJsLufpcAK4gJ7i8JCe26CxyKtJX+gmHBv+o2Oe42gBJR30ZRexFRimvJy2EhcB9RFxSB22umrRB2UpDxAuTxcpIuPeWhlaCGnxdadAJQygY+gAlzu6ndrqzpFJhPJIDirkB6jUaPCQrkkv4JCWh+lQCInGCIBQApgulNhQohlwm2qaDmj-hQC-j-JsiOIICenzjUaZgkZmDGC9n2nzHv40lLExnp7DYE7cG54TbbGpm7Gcn7HcmiHVH8mSGClfqXHIHXG7bikt73HHbYFC7qG9GKm1lUArDZRD7jLsCqJjFrJSyABxO+2d9prkFiOWGZoCRgIk8tiS4pmJaEmL+FADQPQNwHQD7kfnRY6EAA', 'house', '1', 'sell', 5, 2, 1, 7, 1, '2', 125, 199, 'Avenida 25 Abril', 'Sacavem', 'Lisboa', 'Lisboa', '1200', '38.79609329214703', '-9.15274659169735', '5', '68_1727207642.jpg', '5', '5', '5', '5', 46, 'active', '5', '5', '5', '3', '1729541206');
INSERT INTO `property` (`_id`, `ptitle`, `pcontent`, `ptype`, `bhk`, `stype`, `bedroom`, `bathroom`, `balcony`, `kitchen`, `hall`, `pfloors`, `size`, `price`, `pstreet`, `location`, `city`, `state`, `pzipcode`, `ploclat`, `ploclng`, `feature`, `pimage`, `pimage1`, `pimage2`, `pimage3`, `pimage4`, `uid`, `pstatus`, `mapimage`, `topmapimage`, `groundmapimage`, `totalfloor`, `pdadded`) VALUES
(69, 'Titulo.. Moradia... ', 'DwBwfA1gVhAmUDM4JsA9OIA', 'condo', 'on', 'lease', 5, 6, 7, 8, 9, '10', 220, 199, '1', '1', 'Lisboa', 'Lisboa', '23333', '38.882151349893256', '-9.20536275401454', '5', '69_1729542552.jpg', '5', '5', '5', '5', 46, 'sold', '5', '5', '5', '5', '1729542122');

-- --------------------------------------------------------

--
-- Table structure for table `qco`
--

DROP TABLE IF EXISTS `qco`;
CREATE TABLE `qco` (
  `_id` int(11) NOT NULL,
  `c_rtype` int(11) DEFAULT NULL,
  `c_coid` int(11) NOT NULL,
  `c_category` varchar(128) DEFAULT NULL,
  `c_uid` int(11) DEFAULT NULL,
  `c_internal` int(11) NOT NULL,
  `c_name` varchar(128) DEFAULT NULL,
  `c_header` varchar(128) DEFAULT NULL,
  `c_desc` text DEFAULT NULL,
  `c_tel` varchar(28) DEFAULT NULL,
  `c_contact` varchar(128) NOT NULL,
  `c_web` tinytext DEFAULT NULL,
  `c_email` varchar(128) DEFAULT NULL,
  `c_logoimg` tinytext DEFAULT NULL,
  `c_zipcode` varchar(28) DEFAULT NULL,
  `c_zp` varchar(19) NOT NULL,
  `c_door` varchar(128) NOT NULL,
  `c_street` varchar(128) DEFAULT NULL,
  `c_location` varchar(128) DEFAULT NULL,
  `c_region` varchar(128) DEFAULT NULL,
  `c_country` varchar(12) DEFAULT NULL,
  `c_ccode` int(11) NOT NULL,
  `c_placeid` varchar(128) NOT NULL,
  `c_loc_lat` float NOT NULL,
  `c_loc_lng` float NOT NULL,
  `c_google_url` varchar(128) NOT NULL,
  `c_rating` varchar(12) NOT NULL,
  `c_revs` int(11) NOT NULL,
  `c_msg` varchar(128) NOT NULL,
  `c_privacy` int(11) NOT NULL,
  `c_whours` text NOT NULL,
  `c_vala` varchar(128) DEFAULT NULL,
  `c_valb` varchar(128) DEFAULT NULL,
  `c_dadded` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qco`
--

INSERT INTO `qco` (`_id`, `c_rtype`, `c_coid`, `c_category`, `c_uid`, `c_internal`, `c_name`, `c_header`, `c_desc`, `c_tel`, `c_contact`, `c_web`, `c_email`, `c_logoimg`, `c_zipcode`, `c_zp`, `c_door`, `c_street`, `c_location`, `c_region`, `c_country`, `c_ccode`, `c_placeid`, `c_loc_lat`, `c_loc_lng`, `c_google_url`, `c_rating`, `c_revs`, `c_msg`, `c_privacy`, `c_whours`, `c_vala`, `c_valb`, `c_dadded`) VALUES
(1, 5, 5, '101', 5, 5, 'Cga Car Service', 'ns', 'ns', '34 610 78 14 09', 'ns', 'tallerescga.com', '', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=XxreUyf9ml1J4TumyqmHhw&cb_client=search.gws-prod.gps&yaw=13.283979&pitch=0&thumbfov=100&w=260&h=175', '31192', '31', '13', 'C. G', 'Mutilva Baja', 'Navarra', 'Spain', 34, '123', 42.7874, -1.70578, '5', '5', 2, '5', 5, ' na| 9 am–6:30 pm| 9 am–6:30 pm| 9 am–6:30 pm| 9 am–6:30 pm| 9 am–5 pm| na', '5', '5', '1698500279'),
(2, 5, 5, '101', 5, 5, 'Lurauto', 'ns', 'ns', '', 'ns', '', '', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=U7_0QRj8qiWi2iDEXDlmRQ&cb_client=search.gws-prod.gps&yaw=303.37213&pitch=0&thumbfov=100&w=520&h=175', '31110', '31', '15', 'Poligono Talluntxe - E', 'Noain', 'Navarra', 'Spain', 34, '123', 42.7697, -1.71433, '5', '5', 1, '5', 5, '', '5', '5', '1698500279'),
(3, 5, 5, '101', 5, 5, 'LAVADERO', 'ns', 'ns', '', 'ns', '', '', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tbBNWoFNfW9Hpa5Pf4zDIQ&cb_client=search.gws-prod.gps&yaw=107.62284&pitch=0&thumbfov=100&w=520&h=175', '6700', '6', '240', 'C. Hernan Cortes', 'Villanueva de la Serena', 'Badajoz', 'Spain', 34, '123', 38.9823, -5.87642, '5', '5', 1, '5', 5, '', '5', '5', '1698500279'),
(4, 5, 5, '101', 5, 5, 'Talleres Leku Auto', 'ns', 'ns', '', 'ns', '', '', 'https://lh5.googleusercontent.com/p/AF1QipPmm5VBKcue4kfeePEPU8SeCqckLWD-X4IjO4_4=s680-w680-h510', '31011', '31', '23', 'C/ Monasterio de Irache', 'Pamplona', 'Navarra', 'Spain', 34, '123', 42.8168, -1.74323, '5', '5', 1, '5', 5, ' na| 8 am–2 pm, 4–8 pm| 8 am–2 pm, 4–8 pm| 8 am–2 pm, 4–8 pm| 8 am–2 pm, 4–8 pm| 8 am–2 pm, 4–8 pm| na', '5', '5', '1698500279'),
(5, 5, 5, '101', 5, 5, 'Talleres Auto Zip', 'ns', 'ns', '', 'ns', '', '', 'https://lh5.googleusercontent.com/p/AF1QipNljUhjZt0AI13ttVrkLvnCn6c4dknrYGxXwIw6=s680-w680-h510', '31014', '31', '27', 'C. Errotazar', 'Pamplona', 'Navarra', 'Spain', 34, '123', 42.8297, -1.72489, '5', '5', 2, '5', 5, '', '5', '5', '1698500279'),
(6, 5, 5, '101', 5, 5, 'Taller Milkinientos', 'ns', 'ns', '34 948 04 99 38', 'ns', '', '', 'https://lh5.googleusercontent.com/p/AF1QipPcG9DBUYJpHbhuxJloo91xR6HK9K7FPACrUyka=s680-w680-h510', '31110', '31', '48', 'Calle S', 'Noain', 'Navarra', 'Spain', 34, '123', 42.7697, -1.7167, '5', '5', 1, '5', 5, '', '5', '5', '1698500279'),
(7, 5, 5, '101', 5, 5, 'TALLER CGA', 'ns', 'ns', '34 948 23 96 46', 'ns', '', '', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=yL4FSUCyIW0qJ3CHJLmaIQ&cb_client=search.gws-prod.gps&yaw=312.2583&pitch=0&thumbfov=100&w=520&h=175', '31005', '31', '8', 'Calle de Sta Marta', 'Pamplona', 'Navarra', 'Spain', 34, '123', 42.8073, -1.72035, '5', '5', 2, '5', 5, '', '5', '5', '1698500279'),
(8, 5, 5, '101', 5, 5, 'TALLERES DOMINGO', 'ns', 'ns', '34 924 52 43 78', 'ns', 'domingotalleres.es', '', 'https://lh5.googleusercontent.com/p/AF1QipP9O-bn7IeEsyfRte2hpIbeoWKYABb_fzR_2tKW=s680-w680-h510', '6220', '6', '83-84', 'P.I. Los Varales C/Carpintero', 'Villafranca de los Barros', 'Badajoz', 'Spain', 34, '123', 38.5634, -6.44165, '5', '5', 25, '5', 5, ' na| 9 am–2 pm, 4–8 pm| 9 am–2 pm, 4–8 pm| 9 am–2 pm, 4–8 pm| 9 am–2 pm, 4–8 pm| 9 am–2 pm, 4–7 pm| na', '5', '5', '1698500279'),
(9, 5, 5, '101', 5, 5, 'Talleres Hierro', 'ns', 'ns', '', 'ns', '', '', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Lc2VTO_rm7Ox_DnWlKVcDw&cb_client=search.gws-prod.gps&yaw=125.92169&pitch=0&thumbfov=100&w=520&h=175', '29700', '29', '7', 'C. Santiago Rusinol', 'Velez-Malaga', 'Malaga', 'Spain', 34, '123', 36.7635, -4.17806, '5', '5', 1, '5', 5, '', '5', '5', '1698500279'),
(10, 5, 5, '101', 5, 5, 'Pin Auto', 'ns', 'ns', '34 977 74 44 12', 'ns', '', '', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=hrGv8zEzW56YNGSS2RdlKA&cb_client=search.gws-prod.gps&yaw=124.23373&pitch=0&thumbfov=100&w=520&h=175', '43540', '43', '5', 'Carrer de Portugal', 'La Rapita', 'Tarragona', 'Spain', 34, '123', 40.6234, 0.511378, '5', '5', 1, '5', 5, '', '5', '5', '1698500279');

-- --------------------------------------------------------

--
-- Table structure for table `qextras`
--

DROP TABLE IF EXISTS `qextras`;
CREATE TABLE `qextras` (
  `_id` int(11) NOT NULL,
  `e_rtype` int(11) DEFAULT NULL,
  `e_uid` int(11) DEFAULT NULL,
  `e_vala` text DEFAULT NULL,
  `e_valb` text DEFAULT NULL,
  `e_valc` text DEFAULT NULL,
  `e_vald` text DEFAULT NULL,
  `e_vale` text DEFAULT NULL,
  `e_valf` text DEFAULT NULL,
  `e_dadded` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `qlinks`
--

DROP TABLE IF EXISTS `qlinks`;
CREATE TABLE `qlinks` (
  `_id` int(11) NOT NULL,
  `k_rtype` int(11) DEFAULT NULL,
  `k_userid` int(11) DEFAULT NULL,
  `k_coid` int(11) DEFAULT NULL,
  `k_category` varchar(56) DEFAULT NULL,
  `k_title` varchar(128) NOT NULL,
  `k_matter` text DEFAULT NULL,
  `k_privacy` varchar(56) DEFAULT NULL,
  `k_dadded` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qlinks`
--

INSERT INTO `qlinks` (`_id`, `k_rtype`, `k_userid`, `k_coid`, `k_category`, `k_title`, `k_matter`, `k_privacy`, `k_dadded`) VALUES
(51, 5, 20, 22343, 'facebook', 'Facebook', 'wewew', 'aa', '1701503125'),
(52, 5, 5, 18775, 'facebook', 'Facebook', 'wrewrer', 'aa', '1701553284'),
(148, 0, 31, 31, 'whatsapp', 'whatsapp', '1233', 'aa', '1719767574'),
(149, 0, 31, 31, 'whatsapp', 'whatsapp', '2334', 'aa', '1719767662'),
(150, 0, 31, 31, 'noQvalue', 'twitter', 'gttrddds', 'aa', '1719767897'),
(151, 0, 31, 31, 'whatsapp', 'whatsapp', 'gttrdddsfgfd', 'aa', '1719768761'),
(152, 0, 31, 31, 'Telephone', 'Telephone', 'gttrdddsfgfd', 'aa', '1719768767'),
(153, 5, 43, 43, 'whatsapp', 'whatsapp', 'gttrddds', 'aa', '1719768873'),
(154, 5, 43, 43, 'whatsapp', 'whatsapp', 'gttrddds hhhh', 'aa', '1719768882'),
(155, 0, 31, 31, 'other', 'other', 'gttrddds', 'aa', '1719776438'),
(156, 0, 31, 31, 'Web', 'Web', 'gttrddds', 'aa', '1719776447'),
(157, 0, 31, 31, 'noQvalue', 'twitter', 'gttrddds', 'aa', '1719781826'),
(158, 0, 31, 31, 'noQvalue', 'twitter', 'gttrddds', 'aa', '1720364321'),
(159, 0, 31, 31, 'noQvalue', 'twitter', 'gttrddds', 'aa', '1720375136'),
(160, 0, 31, 31, 'other', 'other', 'gttrddds dgdg', 'aa', '1720381124'),
(161, 0, 31, 31, 'telephone', 'telephone', 'gttrddds', 'aa', '1720381650'),
(162, 0, 31, 31, 'instagram', 'instagram', 'gttrddds', 'aa', '1720381658'),
(163, 0, 31, 31, 'telephone', 'telephone', 'gttrddds', 'aa', '1720389046'),
(164, 0, 31, 31, 'email', 'email', 'frr@7566.cvv', 'aa', '1720390096'),
(165, 0, 31, 31, 'email', 'email', '.knkn,', 'aa', '1720390228'),
(166, 0, 31, 31, 'linkedin', 'linkedin', 'gttrddds', 'aa', '1720391477'),
(167, 0, 31, 31, 'sms', 'sms', 'gttrddds', 'aa', '1720784904'),
(168, 0, 31, 31, 'whatsapp', 'whatsapp', '9124477', 'aa', '1720991999'),
(169, 0, 31, 31, 'telephone', 'telephone', '985452', 'aa', '1720994214'),
(170, 0, 31, 31, 'email', 'email', 'gttrddds', 'aa', '1721587262'),
(171, 0, 31, 31, 'sms', 'sms', '44544', 'aa', '1721598854'),
(172, 5, 31, 31, 'facebook', 'facebook', 'gttrddds', 'aa', '1722177085'),
(173, 0, 31, 31, 'twitter', 'twitter', 'gttrddds', 'aa', '1722203582'),
(174, 5, 44, 44, 'telephone', 'telephone', 'gttrddds', 'aa', '1722292080'),
(175, 5, 31, 31, 'facebook', 'facebook', 'gttrddds', 'aa', '1725144018'),
(176, 5, 31, 31, 'whatsapp', 'whatsapp', 'gttrddds', 'aa', '1725187619'),
(177, 5, 43, 43, 'web', 'web', 'gttrdddssdsddsfds', 'aa', '1725795114'),
(178, 5, 16, 16, 'facebook', 'facebook', 'gttrddds', 'aa', '1725830564'),
(179, 0, 22, 22, 'whatsapp', 'whatsapp', '3453553', 'aa', '1726999127'),
(180, 0, 46, 46, 'instagram', 'instagram', 'gttrddds', 'aa', '1729024150'),
(181, 0, 46, 46, 'facebook', 'facebook', 'gttrddds', 'aa', '1729024163'),
(182, 0, 46, 46, 'instagram', 'instagram', 'gttrddsssds', 'aa', '1729208178'),
(183, 0, 46, 46, 'sms', 'twitter', '656655', 'aa', '1729250037'),
(184, 0, 46, 46, 'sms', 'twitter', 'gttrddds', 'aa', '1729250088'),
(185, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250694'),
(186, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250860'),
(187, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250872'),
(188, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250872'),
(189, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250873'),
(190, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250873'),
(191, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250874'),
(192, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250874'),
(193, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250874'),
(194, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250875'),
(195, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250875'),
(196, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250876'),
(197, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250876'),
(198, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250876'),
(199, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250877'),
(200, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250877'),
(201, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250878'),
(202, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250878'),
(203, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250878'),
(204, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250879'),
(205, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250879'),
(206, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250880'),
(207, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250881'),
(208, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250882'),
(209, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250883'),
(210, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250884'),
(211, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250884'),
(212, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250888'),
(213, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250894'),
(214, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729250894'),
(215, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250949'),
(216, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250950'),
(217, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250950'),
(218, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250951'),
(219, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250951'),
(220, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250951'),
(221, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250952'),
(222, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250952'),
(223, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250953'),
(224, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250953'),
(225, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250953'),
(226, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250954'),
(227, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250954'),
(228, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250955'),
(229, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250955'),
(230, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250955'),
(231, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250956'),
(232, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729250956'),
(233, 5, 46, 46, 'twitter', 'twitter', 'gttrddds', 'aa', '1729251021'),
(234, 5, 46, 46, 'linkedin', 'twitter', 'gttrddds', 'aa', '1729251054'),
(235, 5, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729251315'),
(236, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729251319'),
(237, 0, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729251325'),
(238, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251396'),
(239, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251396'),
(240, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251397'),
(241, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251397'),
(242, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251398'),
(243, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251398'),
(244, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251398'),
(245, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251399'),
(246, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251399'),
(247, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251400'),
(248, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251400'),
(249, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251401'),
(250, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251401'),
(251, 5, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251401'),
(252, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251402'),
(253, 0, 46, 46, 'web', 'twitter', 'gttrddds', 'aa', '1729251402'),
(254, 0, 46, 46, 'email', 'twitter', 'gttrddds', 'aa', '1729251746'),
(255, 5, 46, 46, 'sms', 'twitter', 'gttrddds', 'aa', '1729251908'),
(256, 5, 46, 46, 'fax', 'twitter', 'gttrddds', 'aa', '1729252085'),
(257, 5, 46, 46, 'email', 'twitter', 'gttrddds', 'aa', '1729252110'),
(258, 5, 46, 46, 'telephone', 'twitter', 'gttrddds', 'aa', '1729252798'),
(259, 5, 46, 46, 'other', 'twitter', 'gttrddds', 'aa', '1729252844'),
(260, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252916'),
(261, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252916'),
(262, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252916'),
(263, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252917'),
(264, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252917'),
(265, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252918'),
(266, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252918'),
(267, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252918'),
(268, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252919'),
(269, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252919'),
(270, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252920'),
(271, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252920'),
(272, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252920'),
(273, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252921'),
(274, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252921'),
(275, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252922'),
(276, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252923'),
(277, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252925'),
(278, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252926'),
(279, 0, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252927'),
(280, 5, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729252927'),
(281, 5, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729253350'),
(282, 5, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729253360'),
(283, 5, 46, 46, 'facebook', 'twitter', 'gttrddds', 'aa', '1729253369'),
(284, 5, 46, 46, 'facebook', 'twitter', 'gttrddds', 'aa', '1729253379'),
(285, 5, 46, 46, 'facebook', 'twitter', 'gttrddds', 'aa', '1729253382'),
(286, 0, 46, 46, 'Select', 'twitter', 'gttrddds', 'aa', '1729253404'),
(287, 0, 46, 46, 'facebook', 'twitter', 'hghg', 'aa', '1729253584'),
(288, 5, 46, 46, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729254211'),
(289, 5, 46, 46, 'instagram', 'twitter', 'klhkjhj', 'aa', '1729255280'),
(290, 5, 46, 46, 'instagram', 'twitter', 'gttrdddssdsd', 'aa', '1729336753'),
(291, 5, 46, 46, 'instagram', 'twitter', 'gttrddds', 'aa', '1729444027'),
(292, 5, 22, 22, 'Select', 'twitter', 'gttrddds', 'aa', '1729444528'),
(293, 5, 31, 31, 'linkedin', 'twitter', 'gttrdddskjkj', 'aa', '1729446924'),
(294, 5, 16, 16, 'instagram', 'twitter', 'insta s', 'aa', '1729447686'),
(295, 5, 45, 45, 'whatsapp', 'twitter', 'gttrddds', 'aa', '1729449277'),
(296, 5, 19, 19, 'facebook', 'twitter', 'jbose', 'aa', '1729450802');

-- --------------------------------------------------------

--
-- Table structure for table `qmedia`
--

DROP TABLE IF EXISTS `qmedia`;
CREATE TABLE `qmedia` (
  `_id` int(11) NOT NULL,
  `m_rtype` int(4) DEFAULT NULL,
  `m_uid` int(11) DEFAULT NULL,
  `m_coid` int(11) DEFAULT NULL,
  `m_catid` int(11) DEFAULT NULL,
  `m_pid` int(12) DEFAULT NULL,
  `m_file` text DEFAULT NULL,
  `m_file_thumb` text DEFAULT NULL,
  `m_data` text DEFAULT NULL,
  `m_vala` text DEFAULT NULL,
  `m_valb` text DEFAULT NULL,
  `m_valc` text DEFAULT NULL,
  `m_dadded` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `qmedia`
--

INSERT INTO `qmedia` (`_id`, `m_rtype`, `m_uid`, `m_coid`, `m_catid`, `m_pid`, `m_file`, `m_file_thumb`, `m_data`, `m_vala`, `m_valb`, `m_valc`, `m_dadded`) VALUES
(47, 5, 31, 50, 5, 50, '50_1719758022.jpg', 's_thumb50_1719758022.jpg', '5', '1719759120', '5', '5', '1719758024'),
(48, 5, 31, 50, 5, 50, '50_1719758211.jpg', 's_thumb50_1719758211.jpg', '5', '5', '5', '5', '1719758211'),
(49, 5, 31, 50, 5, 50, '50_1719758218.jpg', 's_thumb50_1719758218.jpg', '5', '5', '5', '5', '1719758219'),
(50, 5, 31, 50, 5, 50, '50_1719758223.jpg', 's_thumb50_1719758223.jpg', '5', '5', '5', '5', '1719758223'),
(51, 0, 31, 51, 5, 51, '51_1719759945.jpg', 's_thumb51_1719759945.jpg', '5', '5', '5', '5', '1719759947'),
(52, 5, 31, 51, 5, 51, '51_1719760083.jpg', 's_thumb51_1719760083.jpg', '5', '5', '5', '5', '1719760085'),
(53, 5, 31, 51, 5, 51, '51_1719760088.jpg', 's_thumb51_1719760088.jpg', '5', '5', '5', '5', '1719760089'),
(54, 5, 43, 52, 5, 52, '52_1719768953.jpg', 's_thumb52_1719768953.jpg', '5', '5', '5', '5', '1719768954'),
(55, 5, 43, 52, 5, 52, '52_1719769015.jpg', 's_thumb52_1719769015.jpg', '5', '5', '5', '5', '1719769014'),
(56, 5, 31, 53, 5, 53, '53_1719772173.jpg', 's_thumb53_1719772173.jpg', '5', '5', '5', '5', '1719772175'),
(57, 0, 31, 31, 5, 31, '5', 's_thumb31_1719774206.jpg', '5', '5', '5', '5', '1719774207'),
(58, 5, 31, 42, 5, 42, '42_1719776194.jpg', 's_thumb42_1719776194.jpg', '5', '5', '5', '5', '1719776196'),
(59, 0, 31, 31, 5, 31, '5', 's_thumb31_1719776720.jpg', '5', '5', '5', '5', '1719776720'),
(60, 0, 31, 31, 5, 31, '5', 's_thumb31_1719776727.jpg', '5', '5', '5', '5', '1719776727'),
(61, 0, 31, 31, 5, 31, '5', 's_thumb31_1719776801.jpg', '5', '5', '5', '5', '1719776801'),
(62, 5, 31, 54, 5, 54, '54_1719782914.jpg', 's_thumb54_1719782914.jpg', '5', '5', '5', '5', '1719782916'),
(63, 0, 31, 31, 5, 31, '5', 's_thumb31_1720356715.jpg', '5', '5', '5', '5', '1720356715'),
(64, 0, 31, 31, 5, 31, '5', 's_thumb31_1720356739.jpg', '5', '5', '5', '5', '1720356740'),
(65, 0, 31, 31, 5, 31, '5', 's_thumb31_1720364372.jpg', '5', '5', '5', '5', '1720364372'),
(66, 0, 31, 31, 5, 31, '5', 's_thumb31_1720366926.jpg', '5', '5', '5', '5', '1720366926'),
(67, 0, 31, 31, 5, 31, '31_1720368320.jpg', 's_thumb31_1720368320.jpg', '5', '5', '5', '5', '1720368320'),
(68, 5, 31, 45, 5, 45, '45_1720369287.jpg', 's_thumb45_1720369287.jpg', '5', '5', '5', '5', '1720369289'),
(69, 0, 31, 31, 5, 31, '31_1720372652.jpg', 's_thumb31_1720372652.jpg', '5', '5', '5', '5', '1720372652'),
(70, 0, 31, 31, 5, 31, '31_1720376393.jpg', 's_thumb31_1720376393.jpg', '5', '5', '5', '5', '1720376393'),
(71, 0, 31, 31, 5, 31, '31_1720383655.jpg', 's_thumb31_1720383655.jpg', '5', '5', '5', '5', '1720383656'),
(72, 0, 31, 31, 5, 31, '31_1720383784.jpg', 's_thumb31_1720383784.jpg', '5', '5', '5', '5', '1720383784'),
(73, 0, 31, 31, 5, 31, '31_1720383906.jpg', 's_thumb31_1720383906.jpg', '5', '5', '5', '5', '1720383906'),
(74, 0, 31, 31, 5, 31, '31_1720384106.jpg', 's_thumb31_1720384106.jpg', '5', '5', '5', '5', '1720384107'),
(75, 5, 31, 56, 5, 56, '56_1720390482.jpg', 's_thumb56_1720390482.jpg', '5', '5', '5', '5', '1720390484'),
(76, 5, 31, 56, 5, 56, '56_1720390488.jpg', 's_thumb56_1720390488.jpg', '5', '5', '5', '5', '1720390488'),
(77, 5, 31, 56, 5, 56, '56_1720390491.jpg', 's_thumb56_1720390491.jpg', '5', '5', '5', '5', '1720390491'),
(78, 0, 31, 31, 5, 31, '31_1720868642.jpg', 's_thumb31_1720868642.jpg', '5', '5', '5', '5', '1720868643'),
(79, 5, 31, 58, 5, 58, '58_1720909232.jpg', 's_thumb58_1720909232.jpg', '5', '5', '5', '5', '1720909234'),
(80, 5, 31, 58, 5, 58, '58_1720909434.jpg', 's_thumb58_1720909434.jpg', '5', '5', '5', '5', '1720909435'),
(81, 5, 31, 58, 5, 58, '58_1720909441.jpg', 's_thumb58_1720909441.jpg', '5', '5', '5', '5', '1720909441'),
(82, 5, 31, 57, 5, 57, '57_1721583595.jpg', 's_thumb57_1721583595.jpg', '5', '5', '5', '5', '1721583597'),
(83, 5, 31, 57, 5, 57, '57_1721583602.jpg', 's_thumb57_1721583602.jpg', '5', '5', '5', '5', '1721583602'),
(84, 5, 31, 31, 5, 31, '31_1721584368.jpg', 's_thumb31_1721584368.jpg', '5', '5', '5', '5', '1721584368'),
(85, 5, 31, 60, 5, 60, '60_1722282776.jpg', 's_thumb60_1722282776.jpg', '5', '5', '5', '5', '1722282778'),
(86, 5, 44, 61, 5, 61, '61_1722292146.jpg', 's_thumb61_1722292146.jpg', '5', '5', '5', '5', '1722292147'),
(87, 5, 44, 44, 5, 44, '44_1722292199.jpg', 's_thumb44_1722292199.jpg', '5', '5', '5', '5', '1722292198'),
(88, 5, 31, 54, 5, 54, '54_1723122506.jpg', 's_thumb54_1723122506.jpg', '5', '5', '5', '5', '1723122507'),
(89, 5, 31, 54, 5, 54, '54_1723122512.jpg', 's_thumb54_1723122512.jpg', '5', '5', '5', '5', '1723122512'),
(90, 5, 31, 31, 5, 31, '31_1723196827.jpg', 's_thumb31_1723196827.jpg', '5', '5', '5', '5', '1723196827'),
(91, 5, 31, 62, 5, 62, '62_1723928655.jpg', 's_thumb62_1723928655.jpg', '5', '5', '5', '5', '1723928657'),
(92, 5, 31, 60, 5, 60, '60_1723977631.jpg', 's_thumb60_1723977631.jpg', '5', '5', '5', '5', '1723977630'),
(93, 5, 31, 63, 5, 63, '63_1724065436.jpg', 's_thumb63_1724065436.jpg', '5', '5', '5', '5', '1724065438'),
(94, 5, 31, 63, 5, 63, '63_1724065444.jpg', 's_thumb63_1724065444.jpg', '5', '5', '5', '5', '1724065444'),
(95, 5, 31, 63, 5, 63, '63_1724105653.jpg', 's_thumb63_1724105653.jpg', '5', '5', '5', '5', '1724105654'),
(96, 5, 31, 57, 5, 57, '57_1724591905.jpg', 's_thumb57_1724591905.jpg', '5', '5', '5', '5', '1724591902'),
(97, 5, 31, 59, 5, 59, '59_1724593238.jpg', 's_thumb59_1724593238.jpg', '5', '5', '5', '5', '1724593240'),
(98, 5, 31, 64, 5, 64, '59_1724621763.jpg', 's_thumb59_1724621763.jpg', '5', '5', '5', '5', '1724621765'),
(99, 0, 31, 63, 10, 63, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1724625443'),
(100, 0, 31, 63, 10, 63, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1724625603'),
(101, 0, 31, 64, 10, 64, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1724626500'),
(102, 0, 31, 64, 10, 64, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1724626775'),
(103, 5, 31, 62, 10, 62, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1724628631'),
(104, 0, 31, 64, 10, 64, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1725201256'),
(105, 0, 31, 64, 10, 64, 'https://www.facebook.com/permalink.php?story_fbid=pfbid0ouQHBA8eoipyVhvsKkDSG85uxn6hG7MAufPwnhqh4LiCNWG4ruL3tZqvZUgXHDWPl&id=100050633342965', '5', '5', '5', '5', '5', '1725201331'),
(106, 5, 31, 64, 5, 64, '64_1725204321.jpg', 's_thumb64_1725204321.jpg', '5', '5', '5', '5', '1725204321'),
(107, 5, 31, 64, 5, 64, '64_1725204324.jpg', 's_thumb64_1725204324.jpg', '5', '5', '5', '5', '1725204324'),
(108, 0, 31, 63, 10, 63, 'https://www.facebook.com/photo/?fbid=122125507772347671&set=pcb.122125508054347671&__cft__[0]=AZUTPVZrahWyQPipnkamxTeUHO-Ndka18oczqb6g6SFfC1HfafJ7t9fd_4SdbtBjYYkV5eaK4WcK4ma35lgfG67FuATn0r4K-uV6YiKDYM1kXjQIdCUBjnPbFrbudiPu-CBNwQ-PPhA9GQw7VD66N9qFHmSBrtTG5zMFTR5kIStFWxE0bbm0AQQo9qeA3XUnU4kkwG56VPT0M0I1gBC30P9b&__tn__=*bH-R', 's_thumb64_1725204324.jpg', 'new era ,irandela', '5', '5', '5', '1725206342'),
(109, 0, 31, 63, 10, 63, 'https://www.facebook.com/groups/905552706151031/?hoisted_section_header_type=recently_seen&multi_permalinks=8433435743362652&__cft__[0]=AZV6LsOojDGp6wWZujUD1asnmKzqXtDJRrmec9RmtmsYEEIi3qIcWN06gSfb7Ck8enjzNPhOEcOa03H2ky3yqWIiW78kwPn5mIGISiQZpHWfWQG6rCHqyMC918SxkuEONcwnGOwGwWz8QvnSnlsFgqqDzn05KMQm-4q2gwjH8MaLZIH8RQV87muRkWL4A1tufbXsKnQkAw2fbx9MuDa0WrBI3xf8AF1TKIq2jXlLa7rhYNoeWqBroQ9HR0Mc96DOa4M&__tn__=-UC%2CP-R', '5', 'new divy', '5', '5', '5', '1725209591'),
(110, 0, 31, 63, 10, 63, 'https://www.facebook.com/commerce/listing/3832463207022355/?media_id=1&ref=share_attachment&__cft__[0]=AZV6LsOojDGp6wWZujUD1asnmKzqXtDJRrmec9RmtmsYEEIi3qIcWN06gSfb7Ck8enjzNPhOEcOa03H2ky3yqWIiW78kwPn5mIGISiQZpHWfWQG6rCHqyMC918SxkuEONcwnGOwGwWz8QvnSnlsFgqqDzn05KMQm-4q2gwjH8MaLZIH8RQV87muRkWL4A1tufbXsKnQkAw2fbx9MuDa0WrBI3xf8AF1TKIq2jXlLa7rhYNoeWqBroQ9HR0Mc96DOa4M&__tn__=*b!%3A%3EH-R', '5', 'new peop2', '5', '5', '5', '1725209777'),
(111, 0, 31, 63, 10, 63, 'https://www.facebook.com/photo/?fbid=879627540735640&set=gm.1960611014436393&idorvanity=171088253388687&__cft__[0]=AZXJAIt3mM8ZNdbaSoLPm17ZSj6clkvmJXjt0zIv3AkqlDeZJPUei8wjiH1jf_0GPKuEhwOId0fOeM7GTlCBhLbfKhx_OnMhCXd_0DX1DQyuy0UsQag9utiv7WeQCsqU3F7t7XDAWGgaroCFUKfCWbGVsvC521qej5qJ7kXBcmVgowHZzCpOcnIJdkDaFns6eF-iDrufyfb8KmnclYH_cCQlMuFQ1CfZqs-KE1JXP0mXSw&__tn__=EH-R', '5', 'test title 2', '5', '5', '5', '1725210455'),
(112, 0, 31, 63, 10, 63, 'https://www.facebook.com/reel/1559548028316253/?s=single_unit&__cft__[0]=AZXlbsMyBkNCXiLDbFw9D4Co3qVTYCndrrT-2rMRgG6N-LPS5ng464qIPt2J98spV9_ihuCIwjrIalA20iqw_kDOi2WcbMgZEvPV19cV7HA-c022mlJLkzlaQ9-1CU77wg1-cI7k3bZY3HmXTfbM03ViNK4TI23dJV05JPCz4szDV88uJPNgv5ZyFJZSvBCVPGh3G83nUlJXVkR8iDn1BeNh5Tjlckck_ms8YybzSMwLTQ&__tn__=H-R', '5', 'new ttitle 3', '5', '5', '5', '1725210738'),
(113, 0, 31, 63, 10, 63, 'https://www.facebook.com/reel/1559548028316253/?s=single_unit&__cft__[0]=AZXlbsMyBkNCXiLDbFw9D4Co3qVTYCndrrT-2rMRgG6N-LPS5ng464qIPt2J98spV9_ihuCIwjrIalA20iqw_kDOi2WcbMgZEvPV19cV7HA-c022mlJLkzlaQ9-1CU77wg1-cI7k3bZY3HmXTfbM03ViNK4TI23dJV05JPCz4szDV88uJPNgv5ZyFJZSvBCVPGh3G83nUlJXVkR8iDn1BeNh5Tjlckck_ms8YybzSMwLTQ&__tn__=H-R', '5', 'New Title', '5', '5', '5', '1725211551'),
(114, 0, 31, 64, 10, 64, 'www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'new tutle', '5', '5', '5', '1725227583'),
(115, 0, 31, 64, 10, 64, 'www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'newr titlr', '5', '5', '5', '1725227676'),
(116, 0, 31, 64, 10, 64, 'www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'gfdfgdfgdf', '5', '5', '5', '1725228231'),
(117, 0, 31, 64, 10, 64, 'www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'dsrdttr', '5', '5', '5', '1725228360'),
(118, 0, 31, 64, 10, 64, 'www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'rtretet', '5', '5', '5', '1725228367'),
(119, 0, 31, 64, 10, 64, 'https://www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'gfgf', '5', '5', '5', '1725228469'),
(120, 0, 31, 64, 10, 64, 'https://www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'fggf', '5', '5', '5', '1725228523'),
(121, 0, 31, 64, 10, 64, 'https://www.facebook.com/commerce/listing/521445200258181/?media_id=0&ref=share_attachment', '5', 'dgdgd', '5', '5', '5', '1725231555'),
(122, 0, 31, 63, 10, 63, 'https://www.facebook.com/photo/?fbid=8074979185912373&set=gm.2714212648778685&idorvanity=1756466667886626&__cft__[0]=AZWv2ns5La5pQsjzItAWjjQcIbKHHgr4XwKhs96TfNabUW5UbMz8KQ-vmeoQcyBg4su-5R-cGrNVl0-1HGgeBr3fDCd32QWszioPMM864uuP67bthRZmkYGNzoqIwZSaxGGhM2e4hKXh5yiHjdCSGcTJCs1hw1-wdavf1-YNZ1et0U290NohHSgfpsE6koZi_lwSuBUYjsYuVEn2kqnXMqtGnldhddMNAdMTViitKyeuIg&__tn__=EH-R', '5', 'bull post', '5', '5', '5', '1725269861'),
(123, 5, 31, 63, 10, 63, 'https://www.facebook.com/photo/?fbid=1053550820110423&set=a.627728276026015&__cft__[0]=AZVji1op6aupbI4ps00iMz8Snni9VXbpz6so1VVCps2ELYEyCItORQxVJqU3R4gEQ_-7uBxflnM1i8UJ_PlpVG1SqM0QtZXDNrYTtfO6IMkYmnbjg3qgoSywmYY5Vl55iqCacReTxxRVhp-0lggVgF_cU9O4eA5R9Qi18aB4cqvUT8oig0EvzEpKkdc_VE0p-HYcuBZhUCv6q9TyrmNJLn-q42t2eM4ftNYGnkyEb3GkQA_9TKdKN225ACRvaWCrGCipX87TwQi5rdgEJpxpfhSu&__tn__=EH-y-R', '5', 'trrtt', '5', '5', '5', '1725269914'),
(124, 5, 31, 56, 10, 56, 'https://developers.facebook.com/docs/plugins?__cft__[0]=AZW9-zApVt413nvEH6VNn-mJ2yRSrPzoQZFxGSGB6qxxnjSKWF0w2p2btHfivnWiY9qZFRuGDSl06lDR44z1bYZIP_RlkTV7ekFnvMYRjdvWJ1x7HbHX9W6lOi5DM4qlpsxUxhFtwm3lxGBaxwtvT2w0VbTnc_wZ4e3K7kSaWegppA&__tn__=H-R', '5', 'fb plugins', '5', '5', '5', '1725326034'),
(125, 5, 31, 31, 5, 31, '31_1725791430.jpg', 's_thumb31_1725791430.jpg', '5', '5', '5', '5', '1725791431'),
(126, 5, 16, 16, 5, 16, '16_1725793347.jpg', 's_thumb16_1725793347.jpg', '5', '5', '5', '5', '1725793348'),
(127, 5, 38, 38, 5, 38, '38_1725794452.jpg', 's_thumb38_1725794452.jpg', '5', '5', '5', '5', '1725794452'),
(128, 5, 43, 43, 5, 43, '43_1725794620.jpg', 's_thumb43_1725794620.jpg', '5', '5', '5', '5', '1725794621'),
(129, 5, 42, 42, 5, 42, '42_1725795028.jpg', 's_thumb42_1725795028.jpg', '5', '5', '5', '5', '1725795029'),
(130, 5, 23, 23, 5, 23, '23_1725795384.jpg', 's_thumb23_1725795384.jpg', '5', '5', '5', '5', '1725795385'),
(131, 5, 45, 65, 5, 65, '65_1725816260.jpg', 's_thumb65_1725816260.jpg', '5', '5', '5', '5', '1725816262'),
(132, 5, 45, 65, 5, 65, '65_1725816267.jpg', 's_thumb65_1725816267.jpg', '5', '5', '5', '5', '1725816268'),
(133, 5, 45, 65, 5, 65, '65_1725816271.jpg', 's_thumb65_1725816271.jpg', '5', '5', '5', '5', '1725816271'),
(134, 5, 45, 45, 5, 45, '45_1725816512.jpg', 's_thumb45_1725816512.jpg', '5', '5', '5', '5', '1725816512'),
(135, 5, 45, 66, 10, 66, 'https://www.facebook.com/photo/?fbid=122147483936263691&set=pcb.122147484602263691&__cft__[0]=AZXtJcjWBAkJ5xMkw1_RbXxxo5VMyzyrLs4echUQ8A6Ipg0b2fYN7ptxSSRb051eJuUE0xmDqCdYeM7_w_STj23dxEKDYD30E-oPErWPfprrkYq5sN-QXKQBCfJu5XH-bFsugB7hCE9RjnOHPYVID98eVBfwS-S2GxZgBbffmW5Bf7SQmFpUGbBb5Qd4XF6ceKf6NhjYL5VskQlvjs8mwLCcDzqOnEOvG6SQRRhUrK1rmQ3b6tz7RLo5ZcZP2z7Eu9kiFKFuGufACuzadNihZQTZ&__tn__=*bH-y-R', '5', 'this is new', '5', '5', '5', '1725832955'),
(136, 0, 45, 67, 10, 67, 'https://www.facebook.com/photo/?fbid=489299317396121&set=pcb.2803852499814811&__cft__[0]=AZXOq2LBpyW3quTiHtYF4GCawT958poxhpntegIK8iJl7F3DVkU4ndXU7NZtOnX3RihA9oIK_Clo5TIRE5tJ8weqkeR5CLXHA5QlNZg9JHwYVqmxN36bh5dW6NpX4A35JFT__XhLmeRqn2ocXbwLDkkaWyFrpLsrOLM4QY2Xw5RKYNGxyGCHYkHOf3V4SHR3IPKlP8qbXPxTkyQJFY3ieTbEXlIBiE8ImsthV1k97WRzHv-AD4yNEqq9znTdxtXM30I&__tn__=*bH-R', '5', 'new test prop', '5', '5', '5', '1726277077'),
(137, 0, 45, 67, 10, 67, '67_1726277130.jpg', 's_thumb67_1726277130.jpg', 'new test prop', '5', '5', '5', '1726277131'),
(138, 0, 45, 67, 10, 67, '67_1726277146.jpg', 's_thumb67_1726277146.jpg', 'new test prop', '5', '5', '5', '1726277146'),
(139, 5, 45, 42, 10, 42, 'https://www.facebook.com/photo/?fbid=489299317396121&set=pcb.2803852499814811&__cft__[0]=AZXOq2LBpyW3quTiHtYF4GCawT958poxhpntegIK8iJl7F3DVkU4ndXU7NZtOnX3RihA9oIK_Clo5TIRE5tJ8weqkeR5CLXHA5QlNZg9JHwYVqmxN36bh5dW6NpX4A35JFT__XhLmeRqn2ocXbwLDkkaWyFrpLsrOLM4QY2Xw5RKYNGxyGCHYkHOf3V4SHR3IPKlP8qbXPxTkyQJFY3ieTbEXlIBiE8ImsthV1k97WRzHv-AD4yNEqq9znTdxtXM30I&__tn__=*bH-R', '5', 'xcvdxf', '5', '5', '5', '1726277400'),
(140, 5, 45, 67, 5, 67, '67_1726325613.jpg', 's_thumb67_1726325613.jpg', '5', '5', '5', '5', '1726325614'),
(141, 5, 45, 67, 5, 67, '67_1726325627.jpg', 's_thumb67_1726325627.jpg', '5', '5', '5', '5', '1726325628'),
(142, 5, 45, 66, 5, 66, '66_1726735870.jpg', 's_thumb66_1726735870.jpg', '5', '5', '5', '5', '1726735870'),
(143, 0, 45, 66, 5, 66, '66_1726735873.jpg', 's_thumb66_1726735873.jpg', '5', '5', '5', '5', '1726735873'),
(144, 5, 45, 66, 5, 66, '66_1726735876.jpg', 's_thumb66_1726735876.jpg', '5', '5', '5', '5', '1726735877'),
(145, 5, 45, 55, 5, 55, '55_1726736329.jpg', 's_thumb55_1726736329.jpg', '5', '5', '5', '5', '1726736331'),
(146, 5, 45, 55, 5, 55, '55_1726736335.jpg', 's_thumb55_1726736335.jpg', '5', '5', '5', '5', '1726736335'),
(147, 5, 45, 47, 5, 47, '47_1726736370.jpg', 's_thumb47_1726736370.jpg', '5', '5', '5', '5', '1726736372'),
(148, 5, 45, 47, 5, 47, '47_1726736375.jpg', 's_thumb47_1726736375.jpg', '5', '5', '5', '5', '1726736376'),
(149, 0, 45, 67, 10, 67, 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.tiktok.com%2F%40eramirandelalurde%2Fvideo%2F7416493293661441313%3F_t%3D8prcARKqUis%26_r%3D1%26fbclid%3DIwZXh0bgNhZW0CMTEAAR0iUq2LHQfX55-nOxkezJp6jzvpfNbMaV8enz81z6VJo0V2_Qir0Qlze5U_aem_nJOxlB0ZKlB7yqSWabWHbg&h=AT0DmEUeJFlt1WfsQKSfe1QU1H-5oqDPzghVM6a7BZUQSSyOiPeieuSDp8uUklzsPrczeRuj1S5AejVnhelXXbHSPUppYoQ9K41OTfFfDeKe1YPHkmDkiBawUOTR0lxfsBAv&__tn__=H-R&c[0]=AT1Sfgxsp4p5d3vwRcj_UbtS7KqDpMnNHHLdCqRdNuteQkPsL47FTzveqXn8HAnnU9-1-NnyqGAeLevknBbk0ezfe-1t00tA477ieJ3c_uNoNIysZ6jSH9FAZ27ALxRiHBnIYoQaB8Vw89BY32Cpl0_3-cPyj8pTEmGqNj6eNPgXBTFq8c93-N_W_oeXN3DHyrU7wwiHMulVndvCJTWz4h4UHwENn0O5deafQ9zpQym-CKFLwmsck8RKZvw', '5', 'test vid', '5', '5', '5', '1726787501'),
(150, 5, 45, 67, 10, 67, 'https://www.facebook.com/photo/?fbid=931464265669433&set=pcb.931464885669371&__cft__[0]=AZUAAsDvsdPOeTZSmFQ-c4VLyezcazUzhhmKuYYR8QbrtAd4V3uT-aOAgfrliQOvnTeDjJs8crEvfTyKw9BpC1vekBvPBuAlPN9Sv_pE8vQd2-AtTFlMxFJkINazP97fvMJK6OLxlotYmhcSSacqAkdvyHFUISVgDStmnE9HSiuy70L4EJOt9SIf9S671uiZSEAKoxNRfQi7EJy_rpwEnfx1Scyw5pukOunWvFviKhn56DOiJNdgv98ZQTZAyFZme2CsoKtEVUcVJwfkgIfPUUNWOCUAsINw0dIMT7Gzcl1AQXmfpcDtGZpzoUKBLLrH2yRA2hi4OlvMZF9p8JujLKWI&__tn__=*bH-R', '5', 'test fotos', '5', '5', '5', '1726787582'),
(151, 5, 22, 22, 5, 22, '22_1726999049.jpg', 's_thumb22_1726999049.jpg', '5', '5', '5', '5', '1726999050'),
(152, 5, 45, 54, 10, 54, 'https://www.facebook.com/groups/131538780234799/?multi_permalinks=8187194008002529&hoisted_section_header_type=recently_seen&__cft__[0]=AZWID1rSlp3mIXXzvFghm0y7xnejEV21CBt65h7u-RmpdnLJVw83qqNBx3CrinItr011cPPrEfM4yNfKPB_xfR4jyOanYuMn41s81uBzS9CR26yBPcUztQAJqOV9G-Xb0NxGwKhAOd3ozpuNm1xbJ5AbfXw5dmWEeUqQ7VRVUPcsDcbPh6fGro4Uj6kwyAuftH25fm3xw_gZR-VLmZDpKaceNaCLN3vbiC5ocbbZT4J6Ibyndrlj4B-pJmQ2XTSJAgrsxCQqEXBtVap7LQ5p6w2C9Not0porH1lKD7l3NeWGEw&__tn__=%2CO%2CP-R', '5', 'soc test', '5', '5', '5', '1726999850'),
(153, 5, 45, 54, 10, 54, 'https://www.facebook.com/photo/?fbid=122180836274213842&set=pcb.122180837516213842&__cft__[0]=AZWID1rSlp3mIXXzvFghm0y7xnejEV21CBt65h7u-RmpdnLJVw83qqNBx3CrinItr011cPPrEfM4yNfKPB_xfR4jyOanYuMn41s81uBzS9CR26yBPcUztQAJqOV9G-Xb0NxGwKhAOd3ozpuNm1xbJ5AbfXw5dmWEeUqQ7VRVUPcsDcbPh6fGro4Uj6kwyAuftH25fm3xw_gZR-VLmZDpKaceNaCLN3vbiC5ocbbZT4J6Ibyndrlj4B-pJmQ2XTSJAgrsxCQqEXBtVap7LQ5p6w2C9Not0porH1lKD7l3NeWGEw&__tn__=H-y-R', '5', 'soc test 2', '5', '5', '5', '1726999890'),
(154, 5, 46, 68, 5, 68, '68_1727207642.jpg', 's_thumb68_1727207642.jpg', '5', '5', '5', '5', '1727207644'),
(155, 5, 46, 68, 5, 68, '68_1727207646.jpg', 's_thumb68_1727207646.jpg', '5', '5', '5', '5', '1727207647'),
(156, 5, 46, 46, 5, 46, '46_1727208351.jpg', 's_thumb46_1727208351.jpg', '5', '5', '5', '5', '1727208352'),
(157, 0, 46, 68, 10, 68, 'https://www.facebook.com/photo/?fbid=10229467758137524&set=a.4410714145157&__cft__[0]=AZWShsEzDcqFBzTWY1ZwZS_1t6dH-5tV6_SG8NXcGgpaVzWv9XOfn7-btD28Gw3BPCuu7nPO7lnQ9m4f8IprUbQ4anNoC0xK7FvgcEnokJzZlG5yR0QIaqXg2e3tDREpeTExyBq_Tdtrn5nUF2pjSWucAg6S4dess6qUbk3bGqkYYfg8qT_9wrHUbqJMUgpFXzJk4Q7eAphVM9JrScPi-VW-m6ggArCm5pwXy06rvQwaZw&__tn__=EH-R', '5', 'test', '5', '5', '5', '1727383247'),
(158, 0, 46, 68, 10, 68, 'https://www.facebook.com/photo/?fbid=497667083226011&set=pcb.1174373150312306&__cft__[0]=AZWctiT07_5IlE1SpHeHu5BrkOOh8ZNZghbPs8bHePJ4sNhG3dDkUwk4kQdcjgMhL0zEuxvS28x1alfE4qriZSS02XwwES5nqjgYo7U9waD1A7Bpzl4YSTXyittrd6xa1dKOJyXfotLJSdBCA-zEPwmDEj1EoDHWA3mVKflDSsx24hSOXwt595Yw4GiNiihELHgC-rwYwQ-aT-YSvnjB1EPXuFfRyYUEeKYKBgY6GucmUA&__tn__=*bH-R', '5', 'dfdfdgfd', '5', '5', '5', '1727518298'),
(159, 5, 46, 68, 10, 68, 'https://www.facebook.com/photo/?fbid=481172784755020&set=pcb.481172904755008&__cft__[0]=AZXQXxGSuKR7KBbFeMeVxAFdgFQ44b_qGn439jrAFarFuxGgJWHp5jaX10v_w3cotB83XuSdjPFkCTLfUCQXETb2MX-UCb7naRZdvjVqbPBRTJrAVJDzwjcdRpiZLiNkEP419dIAcvsK2ekVsiSnhVPuoj-ZDkTuARMsf5OAAF6LVoWwP_A4gTKrSeNj3Ls6hYZ1dHHTzBckyMGGeRkUCPRq883Lgypif9A13gjuyWB55DL3qaHZurYWcpXk3bmRxTXw8W5tELgCEt2m6sygoGlV&__tn__=*bH-y-R', '5', 'sefsf', '5', '5', '5', '1727784810'),
(160, 5, 46, 68, 10, 68, 'https://www.facebook.com/photo/?fbid=122197924562211273&set=pcb.122197925942211273&__cft__[0]=AZWOtxbocadgJDYJk7qU5gb_0xVVVjp18UJQL9iHKl-lOB4olUIXyKIzCaplXr7OYVN7qglFa-9EtKzpgra1l93SXztD2yZoZVT0HWVW61NngjWfG4YFcG4m_Ka_HvDx9RkXeSWc11YCHBxHx-CreVqQbBerzbgy0Fe83-skhTa8N3fvhtxd3d7s_Z-9fGXzoGgP2H5ZdwBQmNczQIQ2dqgJQzG4wXveatDZblGsr2H8k7TwyzXBhFVpMwF-uK2hfJAp4P4ST4BZDp-c8zFplJ5KThJfVHefKorOIIHFmulKwCv5aV6aFZrGEhP64276piJ4o39PgUydPVxfv5wCa8i_&__tn__=*bH-R', '5', 'prop 2', '5', '5', '5', '1727787533'),
(161, 0, 46, 68, 5, 68, '68_1727862494.jpg', 's_thumb68_1727862494.jpg', '5', '5', '5', '5', '1727862495'),
(162, 0, 46, 68, 5, 68, '68_1727862991.jpg', 's_thumb68_1727862991.jpg', '5', '5', '5', '5', '1727862992'),
(163, 5, 46, 0, 5, 0, '0_1727863774.jpg', 's_thumb0_1727863774.jpg', '5', '5', '5', '5', '1727863775'),
(164, 5, 46, 13, 5, 13, '0_1727863964.jpg', 's_thumb0_1727863964.jpg', '5', '5', '5', '5', '1727863965'),
(165, 5, 46, 13, 5, 13, '0_1727868592.jpg', 's_thumb0_1727868592.jpg', '5', '5', '5', '5', '1727868593'),
(166, 0, 46, 46, 5, 46, '46_1729193084.jpg', 's_thumb46_1729193084.jpg', '5', '5', '5', '5', '1729193085'),
(167, 5, 46, 46, 5, 46, '46_1729198884.jpg', 's_thumb46_1729198884.jpg', '5', '5', '5', '5', '1729198885'),
(168, 5, 46, 29, 5, 29, '0_1729254457.png', 's_thumb0_1729254457.png', '5', '5', '5', '5', '1729254457'),
(169, 0, 46, 67, 5, 67, '67_1729337228.jpg', 's_thumb67_1729337228.jpg', '5', '5', '5', '5', '1729337228'),
(170, 5, 46, 46, 5, 46, '46_1729337667.jpg', 's_thumb46_1729337667.jpg', '5', '5', '5', '5', '1729337668'),
(171, 0, 46, 67, 5, 67, '67_1729337914.jpg', 's_thumb67_1729337914.jpg', '5', '5', '5', '5', '1729337914'),
(172, 5, 19, 19, 5, 19, '19_1729440833.jpg', 's_thumb19_1729440833.jpg', '5', '5', '5', '5', '1729440833'),
(173, 5, 42, 42, 5, 42, '42_1729444370.jpg', 's_thumb42_1729444370.jpg', '5', '5', '5', '5', '1729444371'),
(174, 5, 46, 69, 5, 69, '69_1729542438.jpg', 's_thumb69_1729542438.jpg', '5', '5', '5', '5', '1729542440'),
(175, 5, 46, 69, 5, 69, '69_1729542552.jpg', 's_thumb69_1729542552.jpg', '5', '5', '5', '5', '1729542552');

-- --------------------------------------------------------

--
-- Table structure for table `qmsg`
--

DROP TABLE IF EXISTS `qmsg`;
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
(28, 0, '49', 'wwpb5jyf82', '', '-', 'reply 501', '', '', 5, '', '', '1710081410');

-- --------------------------------------------------------

--
-- Table structure for table `qmsgs`
--

DROP TABLE IF EXISTS `qmsgs`;
CREATE TABLE `qmsgs` (
  `_id` int(11) NOT NULL,
  `msg_rtype` int(11) DEFAULT NULL,
  `msg_threadid` varchar(12) DEFAULT NULL,
  `msg_cartid` varchar(32) DEFAULT NULL,
  `msg_prodid` varchar(32) DEFAULT NULL,
  `msg_userid` varchar(5) DEFAULT NULL,
  `msg_viewed` varchar(5) DEFAULT NULL,
  `msg_from` varchar(26) DEFAULT NULL,
  `msg_fromsg_email` varchar(50) DEFAULT NULL,
  `msg_fromsg_tel` varchar(20) DEFAULT NULL,
  `msg_fromsg_ip` varchar(22) DEFAULT NULL,
  `msg_to` varchar(26) DEFAULT NULL,
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

INSERT INTO `qmsgs` (`_id`, `msg_rtype`, `msg_threadid`, `msg_cartid`, `msg_prodid`, `msg_userid`, `msg_viewed`, `msg_from`, `msg_fromsg_email`, `msg_fromsg_tel`, `msg_fromsg_ip`, `msg_to`, `msg_to_email`, `msg_subject`, `msg_matter`, `msg_media`, `msg_priority`, `msg_status`, `msg_docomments`, `msg_privacy`, `msg_dadded`, `msg_dmodified`, `msg_modifiedby`) VALUES
(33, 5, 'kkr3mqdwhg', 'noQvalue', '172', '17', '-', '', '', '', '', '16', '', 'Question about 1988 BENTLEY  Front left window mechanism c', 'opus dopus diem cotri moku', 'normal', '', 'open', 'open', '0', '1628494342', '1628494342', ''),
(34, 5, '319jd7mlwad', 'noQvalue', '172', '17', '-', '', '', '', '', '16', '', 'Question about 1988 BENTLEY  Front left window mechanism c', 'gopys diwm', '172_1628494356.gif', '', 'open', 'open', '0', '1628494431', '1628494431', ''),
(35, 5, 'tzqit1crfj', 'noQvalue', '0', '24', '-', '', '', '', '', '0', '', 'whats up', 'going there', 'normal', '', 'open', 'open', '0', '1701628074', '1701628074', ''),
(36, 5, 'tufhl51zif', 'noQvalue', '0', '24', '-', '', '', '', '', '0', '', 'to xico', 'to xico', 'normal', '', 'open', 'open', '0', '1701628663', '1701628663', ''),
(37, 5, '70xfy5pkagx', 'noQvalue', '0', '24', '-', '', '', '', '', '19941', '', 'rwer', 'werewr', 'normal', '', 'open', 'open', '0', '1701632120', '1701632120', ''),
(38, 5, 'nfvgaii3tij', 'noQvalue', '0', '24', '-', '', '', '', '', '22732', '', 'auto rito', 'fddfd', 'normal', '', 'open', 'open', '0', '1701632973', '1701632973', ''),
(39, 5, '7aduwx87n55', 'noQvalue', '0', '14', '-', '', '', '', '', '', '', '', '', 'normal', '', 'open', 'open', '0', '1704749513', '1704749513', ''),
(40, 5, '5hk7aphnupp', 'noQvalue', '0', '14', '-', '', '', '', '', '', '', '', '', 'normal', '', 'open', 'open', '0', '1704749567', '1704749567', ''),
(41, 5, 's74qdgrnu4', 'noQvalue', '0', '0', '-', '', '', '', '', '', '', '', '', 'normal', '', 'open', 'open', '0', '1707763035', '1707763035', ''),
(42, 5, '5glssl6lm5e', 'noQvalue', '0', '0', '-', 'xxx', 'test191@191', '', '', '', '', 'Eliminar Cuenta', 'fffff', 'normal', '', 'open', 'open', '0', '1707766827', '1707766827', ''),
(43, 5, 'nmrgbrn4bc', 'noQvalue', '8', '38', '-', '', '', '', '', 'c_uid', '', 'Question about Amortiguador delantero derecho', 'ijiiji', 'normal', '', 'open', 'open', '0', '1710021557', '1710021557', ''),
(44, 5, 'spaoqhbtjw', 'noQvalue', '21', '38', '-', '', '', '', '', 'c_uid', '', 'Question about Intermitente delantero izquierdo', 'jkhkjhkjh', 'normal', '', 'open', 'open', '0', '1710023459', '1710023459', ''),
(45, 5, 'irt7rhipebq', 'noQvalue', '19', '38', '-', '', '', '', '', 'c_uid', '', 'Question about Luz central de freno', 'bew fgdgfdg', 'normal', '', 'open', 'open', '0', '1710023727', '1710023727', ''),
(46, 5, '31yced0yxdg', 'noQvalue', '19', '38', '-', '', '', '', '', '38', '', 'Question about Luz central de freno', 'dsadasdad', 'normal', '', 'open', 'open', '0', '1710023877', '1710023877', ''),
(47, 5, '4v3504aaxva', 'noQvalue', '2', '38', '-', '', '', '', '', '38', '', 'Question about Amortiguador delantero derecho', 'hahahhahhaa', 'normal', '', 'open', 'open', '0', '1710061777', '1710061777', ''),
(48, 5, 'rnyz0k2y39', 'noQvalue', '19', '39', '-', '', '', '', '', '38', '', 'Question about Luz central de freno', 'question from 601', 'normal', '', 'open', 'open', '0', '1710064246', '1710064246', ''),
(49, 5, 'zucjjkfgqz', 'noQvalue', '2', '39', '-', '', '', '', '', '38', '', 'Question about Amortiguador delantero derecho', 'this is 601. is this you rahbooÂ»', 'normal', '', 'open', 'open', '0', '1710081257', '1710081257', ''),
(50, 5, '791cc9hmep6', 'noQvalue', '2', '38', '-', '', '', '', '', '38', '', 'Question about Amortiguador delantero derecho', 'this is from mobilr', 'normal', '', 'open', 'open', '0', '1710081675', '1710081675', ''),
(51, 5, 'jx3c6yk5bsd', 'noQvalue', '17', '38', '-', '', '', '', '', '38', '', 'Question about Puntera paragolpes', 'cxvcfdd dfd', 'normal', '', 'open', 'open', '0', '1710670737', '1710670737', ''),
(52, 5, 'tw2b8zrvzuo', 'noQvalue', '62', '38', '-', '', '', '', '', '38', '', 'Question about Canto do para-choques', 'fdfdf\nfddfd\n\n\nsfd', 'normal', '', 'open', 'open', '0', '1710672122', '1710672122', ''),
(53, 5, 'xg37p2p3fwj', 'noQvalue', '0', '38', '-', '', '', '', '', '0', '', '', 'ffg', 'normal', '', 'open', 'open', '0', '1710672610', '1710672610', ''),
(54, 5, '6wragthkdy5', 'noQvalue', '110', '40', '-', '', '', '', '', '40', '', 'Alternador para un FIAT PUNTO', 'jhhjjhh', 'normal', '', 'open', 'open', '0', '1710757408', '1710757408', ''),
(55, 5, '70phdtaysk', 'noQvalue', '103', '40', '-', '', '', '', '', '40', '', 'Sistema audio para un BENTLEY BENTAYGA', 'eee', 'normal', '', 'open', 'open', '0', '1711233213', '1711233213', ''),
(56, 5, 'snj1jps57hm', 'noQvalue', '10', '40', '-', '', '', '', '', '40', '', 'Sistema audio para un MITSUBISHI CARISMA', 'qyayaaa', 'normal', '', 'open', 'open', '0', '1717321832', '1717321832', ''),
(57, 5, 'zwfqod9bzkh', 'noQvalue', '0', '31', '-', '', '', '', '', '0', '', 'kjhkk', 'ljlkjll', 'normal', '', 'open', 'open', '0', '1720970933', '1720970933', ''),
(58, 5, '4dxlqvppyl6', 'noQvalue', '0', '31', '-', '', '', '', '', '0', '', 'hahahha', 'jajjjaa', 'normal', '', 'open', 'open', '0', '1720972725', '1720972725', ''),
(59, 5, '1f993qxaqjk', 'noQvalue', '0', '0', '-', '', '', '', '', '0', '', '', '', 'normal', '', 'open', 'open', '0', '1720972788', '1720972788', ''),
(60, 5, 'jgmhj3cd3p', 'noQvalue', '0', '0', '-', 'dgfdg', '', '', '', '0', '', 'fgdfhgfhgf 12232', 'gfhgfhgfh', 'normal', '', 'open', 'open', '0', '1720972872', '1720972872', ''),
(61, 5, 'usd3zg76kng', 'noQvalue', '0', '31', '-', '', '', '', '', '0', '', 'kjhkjhkj', '.kjkjhkj', 'normal', '', 'open', 'open', '0', '1721472958', '1721472958', ''),
(62, 5, 'irdmqqbezji', 'noQvalue', '0', '31', '-', '', '', '', '', '0', '', 'hehe', 'heheheeeeee', 'normal', '', 'open', 'open', '0', '1723991067', '1723991067', ''),
(63, 5, 'og7baii4k8q', 'noQvalue', '0', '31', '-', '', '', '', '', '0', '', 'latest contact subject', 'latest contact subject loggen in', 'normal', '', 'open', 'open', '0', '1723991171', '1723991171', ''),
(64, 5, 'c5wwrif5j0b', 'noQvalue', '0', '31', '-', '', '', '', '', '0', '', '', '', 'normal', '', 'open', 'open', '0', '1725140499', '1725140499', ''),
(65, 5, 'hssgzq9x25r', 'noQvalue', '0', '45', '-', '', '', '', '', '0', '', 'har har', 'ewrewrewr', 'normal', '', 'open', 'open', '0', '1726997839', '1726997839', ''),
(66, 5, 'ljhheinfzzb', 'noQvalue', '0', '46', '-', '', '', '', '', '0', '', 'gjjhjghj', 'knkjkjlj', 'normal', '', 'open', 'open', '0', '1727609281', '1727609281', '');

-- --------------------------------------------------------

--
-- Table structure for table `qposts`
--

DROP TABLE IF EXISTS `qposts`;
CREATE TABLE `qposts` (
  `_id` int(10) NOT NULL,
  `p_rtype` int(5) NOT NULL,
  `p_uid` int(12) NOT NULL,
  `p_cat` varchar(12) NOT NULL,
  `p_ptype` varchar(12) NOT NULL,
  `p_ppage` varchar(12) NOT NULL,
  `p_pos` varchar(12) NOT NULL,
  `p_title` varchar(100) NOT NULL,
  `p_content` longtext NOT NULL,
  `p_image` varchar(300) NOT NULL,
  `p_privacy` varchar(12) NOT NULL,
  `p_author` varchar(12) NOT NULL,
  `p_stat` varchar(12) NOT NULL,
  `p_vars` text NOT NULL,
  `p_ready` int(4) NOT NULL,
  `p_vala` varchar(64) NOT NULL,
  `p_dmodified` varchar(12) NOT NULL,
  `p_dadded` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `qposts`
--

INSERT INTO `qposts` (`_id`, `p_rtype`, `p_uid`, `p_cat`, `p_ptype`, `p_ppage`, `p_pos`, `p_title`, `p_content`, `p_image`, `p_privacy`, `p_author`, `p_stat`, `p_vars`, `p_ready`, `p_vala`, `p_dmodified`, `p_dadded`) VALUES
(10, 0, 0, '', '', '', '', 'About Our Company', '<div id=\"pgc-w5d0dcc3394ac1-0-0\" class=\"panel-grid-cell\">\r\n<div id=\"panel-w5d0dcc3394ac1-0-0-0\" class=\"so-panel widget widget_sow-editor panel-first-child panel-last-child\" data-index=\"0\">\r\n<div class=\"so-widget-sow-editor so-widget-sow-editor-base\">\r\n<div class=\"siteorigin-widget-tinymce textwidget\">\r\n<p class=\"text_all_p_tag_css\">Pramukh Web Solution is a website design and Web development Company dedicated to provide web based solutions to all type of businesses. Located in Ahmedabad, Gujarat (India).</p>\r\n<p class=\"text_all_p_tag_css\">Pramukh Web Solution is a one stop solution for all your IT needs. It Provides full featured innovative and high quality cost effective IT web designing solutions ranging from customized web development, PHP web development, ASP.NET and all kind of programming to complete web solutions including web design, Web Development in PHP, eCommerce Solutions, Multimedia, and Print publication solutions, CSS/XHTML Web Design, Content Management, SEO (Web Promotion), Domain Registration, Web Hosting to businesses throughout the India.</p>\r\n<div id=\"pgc-w5d0dcc3394ac1-0-0\" class=\"panel-grid-cell\">\r\n<div id=\"panel-w5d0dcc3394ac1-0-0-0\" class=\"so-panel widget widget_sow-editor panel-first-child panel-last-child\" data-index=\"0\">\r\n<div class=\"so-widget-sow-editor so-widget-sow-editor-base\">\r\n<div class=\"siteorigin-widget-tinymce textwidget\">\r\n<p class=\"text_all_p_tag_css\">Pramukh Web Solution is a website design and Web development Company dedicated to provide web based solutions to all type of businesses. Located in Ahmedabad, Gujarat (India).</p>\r\n<p class=\"text_all_p_tag_css\">Pramukh Web Solution is a one stop solution for all your IT needs. It Provides full featured innovative and high quality cost effective IT web designing solutions ranging from customized web development, PHP web development, ASP.NET and all kind of programming to complete web solutions including web design, Web Development in PHP, eCommerce Solutions, Multimedia, and Print publication solutions, CSS/XHTML Web Design, Content Management, SEO (Web Promotion), Domain Registration, Web Hosting to businesses throughout the India.</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>', 'condos-pool.png', '', '', '', '', 0, '', '', ''),
(11, 0, 0, '', '', '', '', 'New About title', '<p>hehehaha</p>', '1.jpg', '', '', '', '', 0, '', '', ''),
(12, 5, 46, '', '', '', '', 'dfdffddf', 'DwBwfAJgZtvA9OIA', 'default.jpg', '0', '', '', '', 0, '', '', '1727814642'),
(13, 5, 46, '', '', '', '', 'sfsfsf harrarra', 'DwBwBAzgLgngNgUwLwCIQEMAmmCWA7AcwFpEAzKALjABYAGEADwG4woEGoj04cC8qAxgjxsATkxQA UgUwy5BMKUyyZYAvLUawKzGAAW6UQaPAA9CEkAoYLgBuYHJlSY7ABQD20AJIBbAhBSNvZgAnDoEBCoAqIQop74YlLAOP6h4ZGoOAJ4vgiYAEZQeJBwvlDoBYgokKICWb7oBAgQZgCuAh4iwlBmEAD6UPptvgW0-QCMAOwATFMAHABs8wCsAJwzAHQAViAENWaS5vbWtjgOYRFRKDFxCd2iyamKl5ko2bn5RSUQZRVVCBqcXq70azVaHS6bBEfUGw1G42mcyWAGY1otqDs9gcjmYTsFzpIAGR4AoQEBMY6Emx46mgYmk8mUiynSwkskU8yWIA', 'default.jpg', 'pulic', '', '', '', 0, '', '', '1727894286'),
(14, 5, 46, 'def', 'post', 'main', 'top', 'new%20images%20prop%20post', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728075115', ''),
(15, 5, 46, 'def', 'post', 'main', 'top', 'dssadad', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728075854', ''),
(16, 5, 46, 'def', 'post', 'main', 'top', 'saresrw', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728075950', ''),
(17, 5, 46, 'def', 'post', 'main', 'top', 'fggdgdf', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728076023', ''),
(18, 5, 46, 'def', 'post', 'main', 'top', 'dvxcvx', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728078508', ''),
(19, 5, 46, 'def', 'post', 'main', 'top', 'dvxcvx', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA OKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA mUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-N3A22lMe7sxcQnvwbtiiTEAXY0i48kUymCWh0 kMJlouWsmDsDicrncXmiCHUmgkIKhoXCYEi0Vi8RS 18aQy2UR UKuFKUEqNTqSAaTRa7U63RoVgGY1Gk36AGYJgBWfpTFZrDZbHa-SmHA4nACaUGKxDOSE0YCQWkwOBwNCgmFI5kw-DKExeCttlO2ZJ tuxGn kEBLDxUk4cgUShUrs02l0BmMpjpyPQ9kcLjcmA83hSQeBUgJQbC GJ2FJ3wpR3SWRyFiRGAZJXKVVqZnZjXQzVapA6jz5fX64qFEsGZSl-QqMvWUE2tre9vzKrox3Vmu1uv1qkNxrwixXI8 Dq 5N QfdEE94jYPpkBHBAahIdh4YRJfyMbR8cTWJxqaCKcJWZJKSd46phdpN6jcsmRZat6jrBtuRbXoBg7cYux7CY wHOU10VH8dinDUtR1KA9SgWRiDiFdiOI1Cx1 b9txxXd9xfUE-QhQNnwvMN4RrPIozvOMMSTA4U29V9n3fCIcy-PMDiVaki0jMsimAqs2Q5esuSbHken5eZO3FCYKjmMU5mQod5VHD4JILahuCgQRHigBAzhyCVxXFMjTNtSiXWo94AVEL1Dw4Y9T0hFMWLhCMAJRWN0QTTFk2fAT0HTHFMxEqIxK3JICxpYsONkxlK1ZGslIg1SoI0kVOzmSpJXFEVDOHV513QtILKsmzChKWyQCUMoXOVNzxI8t0vI9HyD0CeiT39ILmJhViwpy6NUW46LeN8fi-ISt8MyJT8DncvqdiymSCjk-LQNrTlG2bXloKlTsRQATgmQZ23FOrjMasyJwAFTAHAzgcFcoGOYg HABBSIatCKIG7Yd2GvdRro31JsY89ZtC68Fq4qLH1i-x4sSjRkuzVK9oGg6pP-BagLOxTwJU671L6EAEzsuAcHe3qlUkuhfv wHFmB0HmjACHVyh8j vSuHPJebzmDGkEUcCpj-BCq92NLRbIofGK LijaicwEndt8fbeaO8KTry5kFMKhmrrU1sBgqTsJmeqZZi5yXXMpugACkAbAW4RTKWz9QmHrfb6x1Yb BHaPilWprV4MMc146cb11aoUJrakp20TyfS-2rZp067YKsDLsgm7 XFB6KsbsURUGH27T93n YB4ggZBsGxchzvY83Z1ZaG WRsV5GAtT9HQ0xrXbyW3H9bWw3xuN03i-NinLek63aar86isZ53oNZ2x2c51ZB3qkeeYLHvlFF8WhbKJyyjmbnPncifMA0SRsnOeaNgoZzYlnVeOcnwEyNgXYmRcyZ71Lgfam2tj4gXprXEq9c jikFHBOYjcygPQqG9O KEY5Px n9Xu-cRbg2IsyMon9f4wxlgnKeiNuFJw2ijfgCBZBUCcCHUg9AABkpBVBIH4J4XhicgA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728118141', ''),
(20, 5, 46, 'def', 'post', 'main', 'top', 'um%20tititltoott%20%3D%20%22%20llclv', 'DwBwfAJgZhAE31gcxsA9OIA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728115322', ''),
(21, 5, 46, 'def', 'post', 'main', 'top', 'image users', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA OKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYWQiymEgA9ACuSDTtACwAbAD6ZQDsAEwTFQAcAMwArGUAdABW-LJm7entqYk7yUz4KWk4bad4A-PznTe3goLAO2lM 3sxcQkvwXtiiWIB7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EkB4NC4TAkWisXiKQOvjSGWycPyhVwpSglRqdSQDSamRabS6PTw-XmIwm82mZUuZXGq3Wm22uy ZKOhzSABUzlB5lUKghHtLNWSdsTPpqMRofpA-ixsVJOHIFEoVIbNNpdAZjKZqQj0PZHC43JgPN4UnaAVJcXawvgCdgiR9Scd0lkchZ4RhaSVylVamYWY10M1Wh1ur0 n1 eMSwBOcZlUul8UbKBbTXPbXR V0FZZcxwLINt4694kr5240QU3iNgWmQEEE28EOqHO2EJ-Ie5He33ozGBoIBvFhwkpPXN8mxqmLt3J mM9P1LM5zn5nl9WbF ajUuDcYVGuS7syw 7ABSjhIFAj4-k2XwHgOmJDiOm5AlaoK2hus5OjCGZ5G6y5eqifqHAG5pbhuO4RBG 5RocsoUnGrpJkUF5psyrLZuyuZcgW4zPq qrjNMX51lKjavBRMZ4MQrR4GBQmapBBrQS8vyiGaY4cBOU5ggGKHQi6p6Ip6KI mi-obgR6DBpioYkVEZH9kkMaUvGGG0XSqZMhmTG3nm3LtN Tw9n aQAGSkKoSD8J4klytJ5GyUa8kmopo6BPBk7WupyGQqh2mOe6SLYQZuG PhymmduIb4nuhwyZFuz2TRBR0S5V6ZmyHKeb0PlalJ1WBcFoXhb5v4QdFOyDnFw4JXBlopYhM4ZVpC7ZVh lrkZ-gmWZGgWeGVmVdF3XHg5ib1c5DIMW5N4sXeXkdYJ1WUXQxQII9xTPY9EW9jJI1yY8CnMIlgJTWpSH Jp87oUdS2roZeHGcVG2YFtFW FV921Tpx0pqdrnXi1rH3t5-Hvf5dBBSFYVE0NNlfbFP3xX9k2qalwP2nNYN1ZDOHrmtcOleZ5WkbtNn7Wj2Xno1jEXa1bE8jdfnCS2pN9RTUVU98Y2wSZgNM7NjrzeDS65ct0OFbDSXw4jAvI3tqPUejYtY017mXW1MuEwN4G2QrvXk 7Um6sNau0 N9Oa4zM0aazaHs4bUMFeC6285t-M7VbQs2yeosNQ7Eu41d7Vu51d0xorPuFx9AejUHMETaHXD8C0VBOGAZD0CX-W-e0vxAA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728119560', ''),
(22, 5, 46, 'def', 'post', 'main', 'top', 'nununun', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728138820', ''),
(23, 5, 46, 'def', 'post', 'main', 'top', 'image%2024', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA%2BOKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA%2BmUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MDbaUx7uzFxCW-Bu2KJYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0EmBkNC4TAkWisXiKX2vjSGWyCPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7H4Uw4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmz3lNop21J3xtWI0f0gAJYuKknDkCiUKhdmm0ugMxlMtKR6HsjhcbkwHm8KUDQKk%2BMDYXwROwJK%2B5KO6SyOQsiIw9JK5SqtTMbMa6GarVIHUevL6-TFgvFgzKkv6FWl6ygmxtrzteeVdGOao1Wp1etUBqNeEWy%2BHH3tnzJP0DbogHvEbG9MgIYP9kODMLD8OL%2BWjqLjCcx2JTQWTBMzxJSjrHlILNOvkbLRlmSrepa3rLlm16AZ23GTtuwmXt%2B1lVcFW-HZJ3VTVtSgXUoFkYg4mXIiiJQ0cfi-LdsR3PdnxBX1wQDJ9z1DOFqzySNb1jdFEwOZMvRfJ83wibNP1zA5FSpQsI1LIogMrVl2TrTlG25Ho%2BXmDsxQmCo5lFOYkMHOUR3ecT82obgoEER4oAQM4cnFMUxVIkybQo50qLef5RE9A8OCPE8IWTZjYXDf9kRjNF4wxJMn349A02xDNhKiUTNySfNqSLdiZIZCsWWrRTwJUyD1OFDs5kqCUxWFAyhxeNc0LSczLOswoShskAlDKZylVcsT3NdTz3W8-dAjo48-UCpjoRY0LsqjFEuKinjfD43z4tfdNCQ-A43N6nZMukgpZLykCaw5Bsmx5KDJQ7YUAE4JkGNsxVqoyGtM8cABUwBwM4HGXKBjmIPhwAQEj6tQ8j%2Bu2bcht3EbaJ9CaGLPGaQqvebOMih8Yv8OKEo0JKsxS3b%2Bv2yS-3mwDToUsDlKutS%2BhAeNbLgHA3p6xUJLoH6-oBxYgZB5owHBldIbIvq0thjzni85hRuBZGAsY-xgsvNiSwWiL72i3jYvWwnMGJnbfD2nnDrC47cqZeSCvpy7VJbAYKg7CYnqmWZOYllyKboAApf6wFuYUyhsvUJm6n3eodGHfnhmi4uVybVaDdGNaO7HdZWyECc2xLtpEsm0r9y3qZO238tAi6IOuvkxXu8qG9FYVBm921fZ5vn-uIQHgdB0WIY7mONydGXBrl4aFaR-yU7RkMMc1m9FpxvXVoNsajZNouzfJi2pKtmnK7OwqGadqCWdsNmOdWAc6uH7n8275QRbFwWykcso5i5j43PHzBqKIyTrPVGQV06sUzivbOj58aG3zkTQupNd4l33lTLWR9gJ0xrsVOufQxQClgnMBuZR7oVFerfZC0dH7fV%2Bj3PuwswZESZGUD%2BP9obS3jpPBGXDE7rWRvwBAsgqBOGDqQegAAyUgqgkD8E8DwhOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728156812', ''),
(24, 5, 46, 'def', 'post', 'main', 'top', '835 images props', 'DwEwlgbgBAxgNgQwM5ILwCICmIAuAnAWhgHsA7HBMUzPdAPgChRJZEUNt8CB3PBAB3416TcNHjI0WXIQDmeMCCh4KAIziYoqvCDwBhOHgASu9FCQ4AnhowAzOMQQ4AXFA22cAbhHA1G1pIYfprBBBYKQiA OKrEIJaMvniJOCB0wGAAtrLmVjbo3Io4ABauAIwADBUApN7meDAYCCCZVAD0-HjEQiqWbQBsABwA mUA7ABMkxVj-QAsEwB0AFb8smZt6W2pidvJTPgpaQCymACuUKTEEMRQAApd-MUIeK9veMDbaUx7uzFxCR wV2YkSYgC7GkXHkimUwS0On0hhMtFy1kwdgcTlc7i80QQ6k0Ekh8NC4TAkWisXiKX2vjSGWyaPyhVwpSglRqdSQDSaLXanW6NCsAzGo0m-QAzBMAKz9KYrNYbLY7IF0w4HE4ATSgxWIZyQmjASC0mBwOBoUEwpHMmH4ZQmn1VTrp22pgKdBI0IMgYJYxKknDkCiUKi9mm0ugMxlMzIx6HsjhcbkwHm8KXDEKkpPDYXwFOwVIBtKO6SyOQs6IwrJK5SqtTMPMa6GarVIHUewr6-Rl4tlgzK8v6FUV6ygmyd3xdJc1dGOOr1BqNJtUZoteEWm8nf1d-xpQPDPogfvEbEDMgIMND8MjSJjqMr UT2JTafxhKzQUzZPzlJS7pnekyyZR94xrdlOQbepm1bAVO16AZe3GftBwmYdR2Vbc1UAnZ511fVDSgY0oFkYg4k3CiKKw6cgQAg9CSPE9PyhYNYTDD9b2jFFGzyeNn2TXF0wOTMAy-D8fwiQt-2LA51QZcs42rIoIPrbleRbfl20FHoRXmPsZQmCo5mlOYMPHFUp1 WTS2obgoEER4oAQM4cllGUZWoqynToz0GJ UFRH9M8OAvK84UzTjkVjUDMSTHFUzxDMP1E9Ac0JPNJKiaT9ySUtGQrXilLZOsuUbdTYK0 DdMlPs5kqOUZUlMyJy HccLSWz7McwoSickAlDKTyNW8mTfO9fzfUC09AhYy8Q3CjjES46LCoTLEBISoTfBE4LUu-XNyT-A4fOGnZ8sUgplJKqCmz5NsOyFBD5T7SUAE4JkGHsZWaiy2us2cABUwBwM4HE3KBjmIPhwAQKjWuw2jRu2Q8JuPKbmKDOa2JvJaoofVb Pit8kv8FK0o0DKCyy47RtO SQNW8DrrUmDNIenS hAVNnLgHAfqG9U5LoIGQbBxYIah5owFhrd4ZokacuRvzPgC5hpshTGwvY-xIvvHiqzWuLX0S4Tkt28nMEpo7fBOoXzpiy7io5VSytZ 7tK7AYKj7CYPqmWZ blry6boAApUGwFuSUyick0JkGoPhrdJHgVRpiUs1 btYjXG9Yuwnja2 Eyf29LDqkmmcpD 3Gau53Sugu64MekUZVe2q2 lSVBkD51g6FkXQeIcHIeh6W4b7pO9w9JXxpVya1Yx0Ks5xqM8f1p91qJk3trNmaLatiubdpu2FIdpn65u8q2Y9hCudsHm dWMcWsnwXS0H5QpZl8Wyncso5gCz D5WemBGLowzsvbGEVc7cXzlvQu75Sbm1LhTcu1Nj5V1PgzA2F9IIsybpVFufQZRimQnMNuZRXoVG s-TCid36A2BkPEeksYYUQ5GUP QDEaK1TvPNGAj067UxvwBAsgqBOEjqQegAAyUgqgkD8E8EItOQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728157889', ''),
(25, 5, 46, 'def', 'post', 'about', 'top', 'novo%20post', 'DwBwfAdg9gblAEIoGcAu06Je2Cloz20KwN1J030qLKuPOpKcYfrtpoubc54%2B6sBLdqmAB6cEA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1728158714', ''),
(26, 5, 46, 'def', 'post', 'main', 'top', 'jghhh', 'DwBwBAzgLgngNgUwLwCIQEMAmmCWA7AcwFpEAzKALjACYAGWkADwG4UA%2BAKwAsDfgB6EGyA', 'default.jpg', 'private', 'user', 'normal', '5', 5, '', '1728245886', ''),
(27, 5, 46, 'def', 'pcarousel', 'main', 'top', 'carosel', 'DwBwfAxghgTg9gZwKYBtgHpxA', 'default.jpg', 'private', 'user', 'normal', '5', 5, '', '1728506135', ''),
(28, 5, 46, 'def', 'pmap', 'main', 'top', 'this is my new map post', 'DwBwfAhgBATgphANognlA5vCAXKBbCEKEAewGdsA6a64AenCA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729035943', ''),
(29, 5, 46, 'def', 'ppost', 'main', 'top', 'this is a post update', 'DwBwfALgFglgzgAngghgkB7OEEFcQAmKEAptMsmptnocWbIpeljvkaeU4la7Rwwo8WNdvS5Jh1NnU6NJqETIETm0-vWAB6cEA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729254459', ''),
(30, 5, 46, 'def', 'pcontent', 'main', 'top', 'this is a content update', 'DwBwfMDOAuBOD2A7A5maALAlpABNnAhjgMZLQCmi0OAriACYEXAD0MCKEL4AUKBOySoM fERDwYtBk3IjcYnBKl1GFeXlzjJ1VbI2LlumeqwKtSndLVyzmwpZUnyrQZ1bggA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729254610', ''),
(31, 5, 46, 'def', 'pimage', 'main', 'top', 'this is an image uphdate', 'DwBwfAzgJhBmPzg4B6cQ', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729254867', ''),
(32, 5, 46, 'def', 'pimage', 'main', 'top', 'new image add', 'DwBwfANghgLgpgZxgAgJYFsoHM7KgE32AHpwg', 'default.jpg', 'members', 'user', 'normal', '46_1729284769.png', 5, '', '1729284770', '1729284770'),
(33, 5, 46, 'def', 'pimage', 'main', 'top', 'catest imagw saved', 'DwBwfAdgpg7gBASwLYHM4gPYGcAucsCGAblACbAD04QA', 'default.jpg', 'members', 'user', 'normal', '46_1729285443.png', 5, '', '1729285558', '1729285443'),
(34, 5, 46, 'def', 'pcarousel', 'main', 'top', 'new%20carousel%20post', 'DwBwfAdgpg7gBAYwIYCcD2BXAzlANnENLAF2AHpwg', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcoCWEAOBlA7qgTgYQgBciERcB7VAZxABoQUNscAVAT1QFNSqAbJACbd6jLLgByAQwBupQjgCuwhmjE4ACpLjwQ8pXRVNcAGXKU5i7gF96AyYUkJQ5AEYA2AOxOQAfUGlPA1RCJEJebh0AWQBNAAIAC3IFKk5YpCpYl05CQk4cWM4IWJTUAEYAJiDCDgiQROTlVCQAWy1azx9Sj3K3AGZygFY3co8AOgArVDh6VF5yMF57Ul6ADlGPFYAWTYAGcsGugZ2AThWguYWIbRAAWmPRipG3Tx79j03StyCcJDBa0uOxwMF3sSHIEFI6EkYBknGaBjAoTYpGM6Rc5Ec9CoDlyKLRGJANhArme3j8AgCXxmITCtRiCSSKTSGSyOTyow5VRqpHqKSCLTaAQGnW6AxWnx6OwmU3O80WhGWaw8blKvR2m16xzVYt6m1ll2udwe5U2Iw8pQtxw8q1K31%2B-0BwPmoPBkOhsPh9ER1TxVHRmJA2PstVRfoJRJJAzJ-h0bij1NC4VI9N5qXSsRgZgEHJzOa5XB5jMaApg7WFXUG4uGbilk2mZAu8sV6y2u32A0OJzOM0bV1IRseypewxGHypZB%2Bf1IAKB9BBIVdOihMOkcIRSN9-oMQdxOlDW4j7j1iF8MZAbj1CdppAgnEwsVQFFQsUkChgsUGA3jZGqBZ0qf5VpSwCTYRUGcp1X6TZpXrWY5SWHRVhbDUNWOEZjgGXpei8Hs5T7HQB3bcpNRWV5ShWbsJ3tUh9h2J0YQXCEl3dVdPXADc93xAMdxDLjCSsKwgA', 5, '', '1729290330', '1729290330'),
(35, 5, 46, 'def', 'pcarousel', 'main', 'top', 'new%20flip%20carousel%20with%206', 'DwBwfALgFglgzgAngghggdgUwO4IGYA2MICAxigE4D2ArnJgQtjNAgGzAD04QA', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcoCWEAOBlA7qgTgYQgBciERcB7VAZxABoQUNscAVAT1QFNSoAbJVHQZosuAHIBDAG6lCOAK7d6jUTgAKEuPBBzFQlcwAy5SrIXcAvvQAmEwhIShyAIwBsAdkcgA%2BkmukPIVRCJEJebm0AWQBNAAIAC3J5Kk5YpCpY505CQk4cWM4IWJTUAEYAJiDCDgiQROSlMiQAW01aj29S93LXAGZygFZXcvcAOgArVDh6VF5yMF47Ul6ADlH3FYAWTYAGcsGugZ2AThWguYWILRAAWmPRipHXDx79903S1yCcJDBa0uOxyEFzsSHIEFI6AkYGknGaQjAoTYpEM6Wc5Ac9Co9lyKLRGJAVhALmeXl8-m0pJmITCtRiCSSKTSGSyOTyow5VRqpHqKSCLTaAQGnW6AxWnx6OwmU3O80WhGWa3crlKvR2m16xzVYt6m1ll2udwe5U2I3cpQtx3cq1K31%2B-0BwPmoPBkOhsPh9ER1TxVHRmJA2LstVRfoJRJJAzJfiFVVC4VI9N5qXSsRgJmsHKzWa5XB5jMaqAFMHawq6g3Fw1cUsm0zIF3livWW12%2BwGhxOZxmDaupCNj2VL2GIw%2BXxmPz%2BpABQPoIJCru0UJhUjhCKRvv9QiDuO0oc3EbcesQPhjlL11PjtQgnEwsVQFFQsQk8hgsUGAyj1O52mT-NaJYCTYRUGcp1X6TZpTrWY5SWbRVmbDUNWOEZjgGXpek8bs5V7bR%2BzbcpNRWV5ShWLsyAnWp9h2J0YXnCFF3dFdPXAddd3xANtxDdjCXoElKmPckAkqC9aVIFhQnkOYOViSJyBwCRrCQCQs1iXNal-GZi3acpgM1coVlcD9IP1Rs4KVLZdT09xUPQzD62ww17keAYCNOYjSLtSdtGnGiXXokAlw9NcfTYsMOJxLiwp44k3GogTTxAas41E7QAClJLBWJelKJ8MnKW0vzzH8Cz-QVKR2YD9iI9xlWMrCFlgkB4I2bY9gOdwjlOEycNuJy3mebph3eT5PIdGcQDnMF-MCpjguRULNyxCKN3DCwLCAA', 5, '', '1729292379', '1729292379'),
(36, 5, 46, 'def', 'pmap', 'main', 'top', 'map%20post', 'DwBwfAlgLgzgBAQzgWwSOID2MrAPThA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729356817', '1729356817'),
(37, 5, 46, 'def', 'pmap', 'main', 'top', 'new%20mao2', 'DwBwfApg7gBAtgQxAJmAenEA', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcwC%2BAaEATAhgF0w0A9gEYBsA7PiAPoCW6CI5IaADtjdgDYCmDAsgE0ABAAsCAVwDO3ITUlCi3bNm4AnIdwhDpLAIwAmZiDYBPFr3ggxU3mknYzFkNM6cjLGgFtMMJ%2BSq6ZPokAMz6AKwk%2BmQAdABWLHCsqjRgTroAnBnunARgnDgMIQAcMWTFACwVAAz6EYHh1RnFOXmcEHCWALQZMQbRJOTBdWQVuiRGuWA4NAQQDADKmNMAbtyeRmAcJgwAMnJEBHh2uCp7B0cgqCDEg5S09JZ3rOxcToKiEtKy8orKajFAe4HOYGNZpEZ7I4GC43KwvD4-OEAkFwsVxsFqvFEu4UmkGJlsqwpgVsEVSmQSLoQtUKiEMjS0SEKq18h0GD0%2BvoKtEyLp%2BRkyCVdJM8jM5otlpg1hs0FsHOdJIdjs5Tk59krLtdbizENQ6AwSCyXhweAwINwAO5CFgsVQEFhCTDiGBCCLhcLA6GWcG2VXe5zcVzuBG%2BQ0VFERfS0sIVbFJYx4px1aqs0nksqVZn06IZcIhEIUYltdndXr9cL6enFYa6YotNBTcXzSxLVbrTbbRXKyFq7tatC3Qx6h6Gwwmt4MAAqHHEuUBQj4BFUmHQNEwgJiQi9oJ9Xz9UN3geD8O8Yae%2BkjOeKJA98dxqXSWTThUsJUzdLpGVz%2BcLadLICchWVbNLW9aitM7ASq2Uoyp2CqWBqPYnDg6oXHgSCYUAA', 5, '', '1729357172', '1729357172'),
(38, 5, 46, 'def', 'pcarousel', 'main', 'top', 'new%20carousel%20post', 'DwBwfMDOAuBOD2A7A5maALAlpABNnAhjogKYDuOAxgQgK6QkA2OI8MAdDhvvkaRdToNmrDlyy5exclRrx6TFm2iduk3HxmD5wpWLV4N0gXIUjl7YAHoYCFBCvhQEAEawcAEwLQCAWgC2lCS%2BLvDI9AC8AEQAjFEO4EA', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcoCWEAOBlA7qgTgYQgBciERcB7VAZxABoQUNscAVAT1QFNSqAbJACbd6jLLgByAQwBupQjgCuwhmjE4ACpLjwQ8pXRVNcAGXKU5i7gF96AyYUkJQ5AEYA2AKxOQAfUGlPA1RCJEJebh0AWQBNAAIAC3IFKk5YpCpYmDMBADo8-Lygwg4IkETk5Spirh5OXl4gpABbLVLPHwBGAHYAJg8ADg63HrcABhyAK1Q4elwkMFKOgE4loN5yMF57UgBmfpyu-oAWI9Gevu6PUaX%2BtY3eCG0QAFolnI7zrrc3XuGerqOQwM6zA9iQ5AgpHQklB0k4TQMYFCbFIxnSLnIjnoVXspTRVAxjhsIFcY28fgEAVGRVC4VIACkFPxyLEdh1YpIMj0OkUSqRyikDFU%2BToUvVGi0YG1Rp1eud%2Bv8vpNpkEcPNFis7pttjo9gdjqdzh5LtdbrMQQ8nq93p9vr9PoC3MCNmCIVCYTJ4Yjkaj0ZihQ5CHi-UT6KSduT-Do3BHZiEwqUIJxMLEKKhYphQvEOQIBLEeXGRWUkoLsdVSmKGrNmq0AjtZT1AaMPJ4dsqZmQ1QtSMtVub7jqQHrDiczhculcblrLaRrR9-naRg6gfQQa7ITpobCvfQkcVfQT-WXcQfCSBia4BpHKTor3HaaUWKEFLFYjhJAIkJJ8vmPMajryNQ6GAEICOQAZFpWEq1joQhQJITKEO2qrqqQ3J9mQFqDsOSznDsJweEsHR-iM06PLObwfKMbhHPhKyeB4XRMc6oIhG6m4enCCK7j6Oj4mex5Bqe-pWKJQA', 5, '', '1729357953', '1729357953'),
(39, 5, 46, 'def', 'ppost', 'main', 'top', 'this%20is%20a%20normal%20post', 'DwFwhgRgNgpgBAYymAzigvAIgLYJgWgEsQZt9xoZMA%2BUCAewBMBPWkAJzcdscIDc4hRlkZ8ACgBVmABxgAxKIxrBeApKgyZ29AO7KArlETI0WAHZgBFvvmmEoUFMqiFjG85aIlscRtumMumbKFLBupjh4XqTkkLAhDCxsnKDcwGDhmn70AUHk9ADmBWEI7CjsYvSEZiTscCAAHiAAwlDsABJ%2BmHDasFgQ%2BiAg9MFwABbsMABmWGND0igAXAD0yyDEYGbL1QioYMsAxN2MYOD4ECj5RX2Y2bk6o2DshGD4MA3Sm4wwwphTYI4qL5Tq9cAQJtNZvMlqt1uAtjs9ssaBJCNJ6L54ABVAKnGDAZZgWhrNIgNKqQS-MkAEWp0gA%2BtIQDIgeoIigoNhQvAIABrAqMVrsABy7GwRkaLTaovF9SaAGVsACJU0AEL0RQ0SooEAE1TEskGlJrRKsAnc4kuYmGYn6vX8A2k8kO9K0UiZLDYGBmfT4JW1F5QIgIEYoRAaoNen3RHySoWdOqS9Wa6iADouCaRiUT7XxHVxaBBjYbzUXTQa4jAePxKSI%2BNTSPQAGqEGB6D2YSWK5VyloAGQ6XWoqPRmLgOJOJDgACu4NqQAA6OCN%2BgIGfo75wFAwWAIQgjJ5wPgAQ%2Be9DD63RYY347xKAANOHsBjmiMSAAvwIPgCSSoKpAfzRPNoaDbg%2BACyYCfA%2BMAgAg87AIW1CASc9RohiG6nPoAKEAAXmAADnADHGLeL4hBTDAkw1DAYY5PhACvNFwPAyDMPQgxhp87AZDRIZQGMlEAGRmBc0gANzAO6bKaNYfp4s8ALBqGPZCtSUAFDQ6bLJm8HLPqQA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729371050', '1729371050'),
(40, 5, 46, 'def', 'pcontent', 'main', 'top', 'this%20is%20a%20content%20post', 'DwFwhgRgNgpgBAYymAzigvAIgLYJgWgEsQZt9xoZMA%2BUCAewBMBPWkAJzcdscIDc4hRlkZ8ACgBVmABxgAxKIxrBeApKgyZ29AO7KArlETI0WAHZgBFvvmmEoUFMqiFjG85aIlscRtumMumbKFLBupjh4XqTkkLAhDCxsnKDcwGDhmn70AUHk9ADmBWEI7CjsYvSEZiTscCAAHiAAwlDsABJ%2BmHDasFgQ%2BiAg9MFwABbsMABmWGND0igAXAD0yyDEYGbL1QioYMsAxN2MYOD4ECj5RX2Y2bk6o2DshGD4MA3Sm4wwwphTYI4qL5Tq9cAQJtNZvMlqt1uAtjs9ssaBJCNJ6L54ABVAKnGDAZZgWhrNIgNKqQS-MkAEWp0gA%2BtIQDIgeoIigoNhQvAIABrAqMVrsABy7GwRkaLTaovF9SaAGVsACJU0AEL0RQ0ZojEj6QIE1TEslGlJrRKsAnc4kuYmGYmGg38I2k8lO9K0UiZLDYGBmfT4JW1F5QIgIEYoRAakM%2Bv3RHySoWdOqS9Wa6iADouCaRiUTHXxnVxaBBTcbLSXzUa4jAePxKSI%2BNTSPQAGqEGB6L2YSWK5VyloAGQ6XWoqPRmLg6JQIDgANqYECE6eGTDNRgevoADo4FifJPp99I6v13AAJdwJWECP6Xf0Kfj6CFDd56hAA', 'default.jpg', 'members', 'user', 'normal', '5', 5, '', '1729371089', '1729371089'),
(41, 5, 46, 'def', 'pimage', 'main', 'top', 'this%20is%20an%20image%20post%20with%20props', 'DwBwfALgFglgzgAngghgOyQWxQcwKYIgD2cECA7jNIQE5EhzAD04QA', '46_1729371131.png', 'members', 'user', 'normal', '5', 5, '', '1729371132', '1729371132'),
(42, 5, 46, 'def', 'pcarousel', 'main', 'top', 'this%20is%20a%20carosel%20with%20props', 'DwFwhgRgNgpgBAYymAzigvAIgLYJgWgEsQZt9xoZMA%2BUCAewBMBPWkAJzcduQhikTI0WBPSj4oAc3wAmRGPwAzeuzK9%2BNAML0AdiQCujesAD06qLRMhuoG2GoAlGDsYx2p%2B6etdajQgDc4QkYsRn8AEXCADwQ9PRpgP0CkVAxMdnoAdwT9ARThTB0wQKL-fAAHQigoFASoQkFUrFKiEmw4Rgzyo0ydBIpYRoLcAmJSckhYfoYWNk5bWgh5qxtvYDAhtJb6nQBrDq6enXJ6SUlBkCiQAGVsMGrMOAzYLAh9EBBdR4ALdhhFLDfD7lFAALhMVmIYB0JkIOgQqDAJgAxI9GGBwPgICgTmcXphOvRulk%2BnAwOxCGB8DAouVoa4QphFPcUFQOhiqSN8L9-oDgWCISAoTC4QiUEiaHdCCgAHRyjyWNZWZYgGasLyTGCWeqWXKWJL6gKKmzKxVqxWa6hAA', '46_1729371131.png', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcoCWEAOBlA7qgTgYQgBciERcB7VAZxABoQUNscAVAT1QFNSqAbJACbd6jLLgByAQwBupQjgCuwhmjE4ACpLjwQ8pXRVNcAGXKU5i7gF96AyYUkJQ5AEYA2AAxOQAfUGlPA1RCJEJebh0AKQV%2BcgACAGYARjjJKjiAJiSgwg4IkAALcgUqZSpcrh5OXl4gpABbLXzPHySAdgzOgA4Mtra3ADoAK1Q4elwkMHykgE4ZoN5yMF57UgSugbaugBZtj06AVnaDjxmuhaXeCG0QAFoZgaTO-rcOt2ftpLcDRbB7JHIEFI6Ekf2knHqBjAoTYpGMSCoLnIjno5Xs%2BXhiORIBsIFcbgS3j8AgChPGITC%2BQgnEwcQoqDimFCBVSAgEcWy5LypCKJTKFXypRqdUaMGaCVaHU%2BHgObgOCWGoyCOEm0zmF2Wqx0602Oz2h2Op3O41%2BVxu90ezzcrwy716n2%2B9F%2B-0BwNBMghUJhcIRSJRIDRhAxvuxuPx2yJ-h0bgj5NC4VI1NpqHpqQUMEyByzOW5Ol5pQM5VzAeqtXGDSaAW2koyBwyHm2CQy20VYzIKqmpE6XhNly1IB1W0bjZmvRm8oSbQ1ZtIFqetYyCTOtqyXWNIGdIVdOhBYM99GhuR9WP9geDJ5x9HxB0jJOjN7jlNIAFkAJpxfOcOIIuIwMwCAZAKAwCc0qPNigLVEBSqYVy1FZoDhrA4ui%2BW0PFbZVVVIWZ5l7TVCDWDYh31WtDTOadrlnB55xeN4Pi%2BH4lhdIEd3dcFIQPb0dExP1CwcINj14qxcQUYJi3pGgrCAA', 5, '', '1729371180', '1729371180'),
(43, 5, 46, 'def', 'pmap', 'main', 'top', 'this%20is%20a%20map%20with%20props', 'DwBwfAtghiAEDuBLALgC1iATgexAZ2AHpwg', '46_1729371131.png', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcwC%2BAaEATAhgF0w0A9gEYBsADPiAPoCW6CI5IaADtjdgDYCmDAUgFdONAgAIAzAEZRmAM6iATJOYg2ATxa94IABYEBs3mlnYNWkIc6cVLGgFtMMc%2BSqSA7As8AOBW7ckAOgArFjhWACcaMHNJAE5Ym04CME4cBnEvALcvABYcsk8AVndCslivROTOCDhtAFpYgMlPfxIPEhacyRIVJLAcEQgGAGVMfoA3bjsVMA41BgAZGlkiAjxjXGxzJZW1kFQQYhJxSlp6bWObdi5zCG4Ad1EWcIIWUXuOHRl0dFFlVlMmgYegMRgsgPMlmsrHsjmc4lcHi6ZEKJEK4mCoRskWiDDiCVYfVS2HSmWyeQKCmKblK5UqKRqDAaTRaJDaCg6vi6PTQfQGBCG2lGEymMzmi2Wq3W4Jw20lewORxypzoDBIyoBHB4DDujxYz1eMgEMEUhTNVzMwP0hhUJkt2ihNlhTjVOURVIUZBy4gUOUxYVUOPMngohKqaW0GSyuXE3tivli6PEbnp1VqIGZzQ94nKHKUXgqvOS-MFIGFmEm0zQs1MEt20pMsrrUv2aCOhRV50YHc1NwYAFkAJqiEGGUTLUQwAgEdABOfzucWoHaUdgu3LizcKxOhwui6Fd2FLzdDlkf3YqIxeKpiMgKPk-JFEplQuqImM%2BqNLOtdqdbq9Yt2AFEYxgrUVq3FbQdhbDYmyg%2BU8CQA4BHUDcDRYWR9iAA', 5, '', '1729371295', '1729371295'),
(44, 5, 46, 'def', 'pimage', 'main', 'top', 'new%20image%20post%20test', 'DwBwfAdgpg7gBASwLYEMDmU4gPYGcAucAJlLgMbAD04QA', '46_1729417973.png', 'members', 'user', 'normal', '5', 5, '', '1729417973', '1729417973'),
(46, 5, 46, 'def', 'pcarousel', 'main', 'top', 'user%20carousel', 'DwBwfArgzgpgTgAgMYEM4HtowDbAPThA', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcoCWEAOBlA7qgTgYQgBciEQBXAZwFMcKQAaEFDbHAFQE9UrSKAbJABMejZllwA5AIYA3UoRxkRTNOJwAFKXHggFShipa4AMgHtTqeYp4BfRoKmEpCUKYBGAFgBsLkAH0hUm8DMj8oMj4%2BCCkAWx4dQioKRJwvAFY0kL8cKhgkUwhSADUkKWiAAkFTcrwpZKo%2BUyykMAKgrz8ARgB2ACYATgBmQe6vL26AOgArVDhGULBHUkz5vwALKilhHHkkwnTMuxB3D0zEf0CdU6zwyOi40jY98rSABnfnVZy8tp1m1sKVzSXT6aQAHJ10p1etNZllFoRSJ0shstjRdsk3u8QEcTh5fAFBEF8atblFYvEQFMkDFyvwaVlvvlASB-r8QB4PCDejz%2Br1Ov1%2BrC5uQ-AikSjNtsMYQ3uUpmsZGsoHJcZ5egTLhyNaSIuSHjocKYYOivrlmaQ2SyPL1uWluv03r0wcL4UsdMjVqjpTpcKYoK1hDjGCdBpqiVcw7q7hTSAApUx1coeKOipnsq1BQZ2h3eXqvV2rcUeyVonYJPZg0bB45uQb9cOkes3PX3SlrKQdtZdjuM80Z1YtAei4sgT2i73oivJLyvZE2I5kVCELiUyg0Og2IA', 5, '', '1729422303', '1729422303'),
(47, 5, 46, 'def', 'pcarousel', 'main', 'top', 'new%20props%20slide', 'DwBwfAdgpg7gBCATgexAZzmgNgSwCZTAD04QA', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcoCWEAOBlA7qgTgYQgBciERcB7VAZxABoQUNscAVAT1QFNSqAbJACbd6jLLgByAQwBupQjgCuwhmjE4ACpLjwQ8pXRVNcAGXKU5i7gF96AyYUkJQ5AEYA2AOxOQAfUGlPA1RCJEJebh0AWQBNAAIAC3IFKk5YpCpYl05CQk4cWM4IWJTUAEYAJiDCDgiQROTlKmquHk5eXiCkAFstWs8fUo9ytwBmcoBWN3KPADoAK1Q4elwkMFrSgE4NoN5yMF57UhGADhmPY4AWC4AGconB8euN45293ghtEABaDZmK6bcnmGdw8F1KbgMuzA9iQ5AgpHQkmh0k4XQMYFCbFIxnSLnIjnoTXstRxVDxjhsIFcbgu3j8AgCtOWITCtQgnEwsVQFFQsUkChgsQm43GVRqpHqKQMTXFOhS7U6PRgfQuAyG43K1wuYwu80WQRwq1qd2ur32hx0JzOlxG2o20w24xGIy8yyh70%2BPz%2Bdw1I2ewNKxxe9ChMLhCKRMlR6Mx2Nx%2BOlDlycbJCcp1MqiF8-h0UyqoXCpBYoQUuxmM1ikXIOEkAiQknLFbFLR0ksazVq8o6y26vQC5TV5T95WObhFeqWZENa1Im22breFpAVvO2rtDqdLrNHtIXv%2Bvv9U0DwZAoZC4Z0iOR0foGOqKfJieJD7T9Gppqz9ICpuZBdqAClS1hWIRlKPkMnKUpm1qNtE1lEAu0VPtc2uQc7mOaYPDcCcDSNWctm3JcV0uG4fQeJ4T1Qd0Pl3X5-iwoEpmmMEIRDPYw3hS9IxRNFb1jHRSUfQkkxJeMKUpBRgngnkaCsIA', 5, '', '1729423523', '1729423523'),
(48, 5, 46, 'def', 'pcontent', 'main', 'top', 'normal%20content%20update', 'DwFwhgRgNgpgBAYymAzigvAIgLYJgWgEsQZt9xoZMA%2BUCAewBMBPWkAJzcdscIDc4hRlkZ8ACgBVmABxgAxKIxrBeApKgyZ29AO7KArlETI0WAHZgBFvvmmEoUFMqiFjG85aIlscRtumMumbKFLBupjh4XqTkkLAhDCxsnKDcwGDhmn70AUHk9ADmBWEI7CjsYvSEZiTscCAAHiAAwlDsABJ%2BmHDasFgQ%2BiAg9MFwABbsMABmWGND0igAXAD0yyDEYGbL1QioYMsAxN2MYOD4ECj5RX2Y2bk6o2DshGD4MA3Sm4wwwphTYI4qL5Tq9cAQJtNZvMlqt1uAtjs9ssaIRpPRfPAAKoBU4wYDLMC0NZpEBpVSCX6kgAiVOkAH1pCAZED1BEUFBsKF4BAANYFRitdgAOXY2CMjRabRFYvqTQAytgAeKmgAheiKGjNEYkfSBfGqImkw0pNaJVj4rlElxEwxEg36-iGklkx3pWikTJYbAwMz6fCK2ovKBEBAjFCIdXB72%2B6I%2BCWCzp1CVqjXUQAdF-jSETCQ6%2BE6uLQICajRbi2bDXEYDx%2BBSRHwqaR6AA1QgwPSezAShVK2UtAAyHS61AkqPR3zgaJQIDgANqYECE6eGVDNRguvoADo4JifJPp%2BOVzqFwBLuCKwjh-S7%2BhTjFwaCFDe56hAA', 'default.jpg', 'members', 'co', 'normal', '5', 5, '', '1729440172', '1729440172'),
(49, 5, 46, 'def', 'pmap', 'main', 'top', 'bew%20user%20mao', 'DwBwfAdgpg7gBAVwM5QE5wLYEMTAPThA', 'default.jpg', 'members', 'user', 'normal', 'N4IgxgdgZg5iBcwC%2BAaEATAhgF0w0A9gEYAsAbPiAPoCW6CI5IaArlVCwDacSYC2AUwbYBAZxEAnMgFZpzEGwkCYNAhAYAhAQCs8rWmDUMAjAE4qxgOwAmUyRIAGABwBmFwDptABzj6wOBjl9AAsBTHQBCWExbBkghSpOAjBOAPgQFyd3B2NpBwp9JJSIOHSAWkt3JzIXaxcQVBBiEjlEajoGFvk2Dm5eQQYAFRiAAjyHBz0EpRUjdIA1GlSRgCUwzm6DOcZpCxtpJ2MZY2tPH03-bBNN0PDI6PFxh02i1Kv0kmN3W0tLEhfkjxSiAKu5LC5LMYGmhmv82rR6B9-vpejx%2BEJ0roaIIRkQ1EJ9DNVOp0gBlATYFhETAbfQ0QwkxgkPbWVmmaxmUxnXwJS7XEJhCJRdIiR4OEbaYIAN2CUClAJSaQyWWk1nsCqBDDKWScuus0KapHq8I6H3qKK4aIG6QAUgRMKIRiRzdNlMTNBJMDBMBB-Jt6dtnSzpJY7GRrA5uRclVCBXdhSBRdgnJYCglXkrPlUHCGNSUtWQwSHLA1GiwvNgAJ5eDEKUSRUQNIA', 5, '', '1729454319', '1729454319'),
(50, 5, 46, 'def', 'pimage', 'main', 'top', 'our%20staff', 'DwBwfALgFglgzgAngg9gVwE4LhAhgM32AHpwg', '46_1729454538.png', 'members', 'user', 'normal', '5', 5, '', '1729454539', '1729454539');

-- --------------------------------------------------------

--
-- Table structure for table `quser`
--

DROP TABLE IF EXISTS `quser`;
CREATE TABLE `quser` (
  `_id` int(11) NOT NULL,
  `u_rtype` int(11) DEFAULT NULL,
  `u_cat` int(12) NOT NULL,
  `u_name` varchar(64) DEFAULT NULL,
  `u_fullname` varchar(128) NOT NULL,
  `u_location` varchar(64) NOT NULL,
  `u_region` varchar(64) NOT NULL,
  `u_loclat` varchar(24) NOT NULL,
  `u_loclng` varchar(24) NOT NULL,
  `u_email` varchar(128) DEFAULT NULL,
  `u_pass` varchar(128) DEFAULT NULL,
  `u_header` varchar(256) DEFAULT NULL,
  `u_desc` text NOT NULL,
  `u_icon` varchar(128) NOT NULL,
  `u_privacy` varchar(12) NOT NULL,
  `u_socauthtype` int(11) DEFAULT NULL,
  `u_socauthid` varchar(128) DEFAULT NULL,
  `u_socauthtoke` text DEFAULT NULL,
  `u_dadded` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `quser`
--

INSERT INTO `quser` (`_id`, `u_rtype`, `u_cat`, `u_name`, `u_fullname`, `u_location`, `u_region`, `u_loclat`, `u_loclng`, `u_email`, `u_pass`, `u_header`, `u_desc`, `u_icon`, `u_privacy`, `u_socauthtype`, `u_socauthid`, `u_socauthtoke`, `u_dadded`) VALUES
(16, 5, 1, 'roros', 'cvcb gfgdfgfd', '', 'Beja', '38.01506', '-7.86323', 'roror', 'rprp', 'aa', 'new intro', '19_1729440833.jpg', 'members', 5, '5', '5', '5'),
(17, 10, 0, 'Email', '', '', '', '', '', 'Email', 'Password', 'Email', '', '', '', 0, '', '', '1628494115513'),
(18, 10, 0, 'test191', '', '', '', '', '', 'test191@191', '191', 'test191', '', '', '', 15, '5', '5', '1701428470764'),
(19, 5, 1, 'roros', 'Him Boce', '', 'Braga', '41.55032', '-8.42005', 'roror', 'rprp', 'Jim Boce', 'Jim Boce intro', '19_1729440833.jpg', 'public', 5, '5', '5', '5'),
(20, 10, 0, 'test191', '', '', '', '', '', 'test191@191', 'test191', 'test191wwwwqq', '', '', '', 5, '5', '5', '1701436625287'),
(21, 10, 0, 'test191', '', '', '', '', '', 'test191@193', 'testco21', 'test191', '', '', '', 5, '5', '5', '1701445603035'),
(22, 5, 1, 'trtt', 'uboo boboo', '', 'Aveiro', '40.64427', '-8.64554', 'trtt@', 'trtt', 'trtt', '', '22_1726999049.jpg', 'public', 5, '5', '5', '1701509624242'),
(23, 5, 1, 'test191', 'Ryan Ruan', '', 'Vila Real', '41.29774', '-7.7371', 'test191@193', 'test', 'test191', 'dfd d fdgdgfdg ', '23_1725795384.jpg', 'public', 5, '5', '5', '1701518582966'),
(24, 10, 1, 'test191', '.,nk,kkjjl', '', '', '', '', 'test191@191', 'test', 'test191', '', '', '', 5, '5', '5', '1701613495107'),
(25, 10, 0, 'test191', '', '', '', '', '', 'test191@192', '191', 'test191', '', '', '', 5, '5', '5', '1702746594511'),
(26, 10, 0, 'test', '', '', '', '', '', 'test@test.com', 'test', 'test', '', '', '', 15, '5', '5', '1703329622354'),
(27, 10, 0, 'test200', '', '', '', '', '', 'test200@test.com', '200', 'test200', '', '', '', 5, '5', '5', '1705516757974'),
(28, 5, 0, 'test201', '', '', '', '', '', 'test201@201', '201', 'test201', '', '', '', 5, '5', '5', '1707059945444'),
(29, 5, 0, 'test501', '', '', '', '', '', 'test501@501', '501', 'test501', '', '', '', 15, '5', '5', '1707238246105'),
(30, 5, 0, 'test502', '', '', '', '', '', 'test502@502', '502', 'test502', '', '', '', 15, '5', '5', '1707300208450'),
(31, 5, 2, 'roros', 'Jonas 19', '', 'Braga', '41.55032', '-8.42005', 'roror', 'rprp', 'Jonas 19Jonas 19Jonas 20Jonas 19', 'Jonas 19Jonas 19Jonas 19Jonas 19Jonas 19Jonas 19', '31_1725791430.jpg', 'public', 5, '5', '5', '5'),
(32, 5, 0, 'test609', '', '', '', '', '', 'test609@609', '609', 'test609', '', '', '', 15, '5', '5', '1707301604002'),
(33, 5, 0, 'test654', '', '', '', '', '', 'test654@test654', 'test654', 'test654', '', '', '', 15, '5', '5', '1707561851079'),
(34, 10, 0, 'test503', '', '', '', '', '', 'test503@503.com', '503', 'test503', '', '', '', 15, '5', '5', '1707829300930'),
(35, 10, 0, 'test503', '', '', '', '', '', 'test503@503.com', 'test503', 'test503', '', '', '', 5, '5', '5', '1707829399777'),
(36, 10, 0, 'test505', '', '', '', '', '', 'test505@505.ll', '505', 'test505', '', '', '', 5, '5', '5', '1707829772605'),
(37, 5, 0, 'test501', '', '', '', '', '', 'test501@501.com', '501', 'test501', '', '', '', 5, '5', '5', '1708263390'),
(38, 5, 0, 'test501', '', '', '', '', '', 'test501@501.com', '501501', 'test501', '', '', '', 15, '5', '5', '1708429583'),
(39, 5, 1, 'test601', 'hahahhahha', '', '', '', '', 'test601@test601.com', '601601', 'test601', '', '', '', 15, '5', '5', '1710064133'),
(40, 5, 0, 'test200', '', '', '', '', '', 'test200@200.com', 'test200', 'test200', '', '', '', 15, '5', '5', '1710675202'),
(41, 10, 0, 'profcode', '', '', '', '', '', 'profcode@hotmail.com', 'profpass', 'profcode', '', '', '', 15, '5', '5', '1717874145'),
(42, 5, 1, 'profcode', 'roger', '', 'Acores', '37.7412', '-25.6756', 'profcode@hotmail.com', 'testco21', 'profcode vg', '', '42_1729444370.jpg', 'public', 5, '5', '5', '1719608323'),
(43, 5, 1, 'test876', 'Joas 43', '', 'Braganca', '41.8057', '-6.7577', 'test876@876', 'test876', 'test876', '', '43_1725794620.jpg', 'public', 5, '5', '5', '1719679742'),
(44, 5, 1, 'test501', 'jaime bone', '', 'Setubal', '38.5244', '-8.8882', 'test501@501.com', 'test501', 'test50 jhvhfv', 'gcdc', '44_1722292199.jpg', 'public', 5, '5', '5', '1722291964'),
(45, 5, 1, 'roros', 'Test 5000a', '', 'Vila Real', '41.29774', '-7.7371', 'roror', 'rprp', 'test5000', 'test is testa', '45_1725816512.jpg', 'public', 5, '5', '5', '5'),
(46, 5, 5, 'roros', 'tester655', '', 'Beja', '38.01506', '-7.86323', 'roror', 'rprp', 'test655', 'test655 introbb', '19_1729440833.jpg', 'private', 5, '5', '5', '5');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
CREATE TABLE `state` (
  `sid` int(50) NOT NULL,
  `sname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`sid`, `sname`) VALUES
(2, 'gujarat'),
(3, 'goa'),
(4, 'maharashtra'),
(7, 'bihar'),
(9, 'chhattisgarh'),
(10, 'uttar pardesh'),
(15, 'rajasthan'),
(16, 'Lisboa'),
(17, 'Coimbra');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(50) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `uemail` varchar(100) NOT NULL,
  `uphone` varchar(20) NOT NULL,
  `upass` varchar(50) NOT NULL,
  `utype` varchar(50) NOT NULL,
  `uimage` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `uname`, `uemail`, `uphone`, `upass`, `utype`, `uimage`) VALUES
(14, 'admin', 'admin@gmail.com', '9876543210', 'admin', 'user', '3.jpg'),
(15, 'aryan', 'aryan@gmail.com', '9878678678', 'aryan', 'agent', '2.jpg'),
(16, 'demo', 'demo@gmail.com', '7976976979', 'demo', 'user', '1.jpg'),
(21, 'disha', 'disha@gmail.com', '7976956956', 'disha', 'agent', '2.jpg'),
(22, 'disha', 'disha1@gmail.com', '8997897869', 'disha', 'agent', '1.jpg'),
(23, 'testing', 'testing@gmail.com', '9869596597', 'testing', 'builder', '1.jpg'),
(24, 'some', 'some@gmail.com', '9689698697', 'some', 'builder', '3.jpg'),
(25, 'test', 'test12@gmail.com', '9798678969', 'test', 'builder', 'avatar-3.jpg'),
(28, 'Joao Barros', 'profcode@hotmail.com', '913883735', 'incasa', 'builder', 'adddata.gif'),
(29, 'test191', 'test191@191', '191', '191', 'agent', 'tools.gif'),
(30, 'construt', 'const12@test.com', '9123444', 'const12', 'builder', '4.png'),
(31, 'vgjgjg', 'test543@543', 'gjghjghjg', 'test543', 'agent', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `qco`
--
ALTER TABLE `qco`
  ADD PRIMARY KEY (`_id`),
  ADD UNIQUE KEY `_id` (`_id`),
  ADD KEY `_id_2` (`_id`);

--
-- Indexes for table `qextras`
--
ALTER TABLE `qextras`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `qlinks`
--
ALTER TABLE `qlinks`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `qmedia`
--
ALTER TABLE `qmedia`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `qmsg`
--
ALTER TABLE `qmsg`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `qmsgs`
--
ALTER TABLE `qmsgs`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `qposts`
--
ALTER TABLE `qposts`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `quser`
--
ALTER TABLE `quser`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `cid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `cid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `fid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `qco`
--
ALTER TABLE `qco`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24087;

--
-- AUTO_INCREMENT for table `qextras`
--
ALTER TABLE `qextras`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `qlinks`
--
ALTER TABLE `qlinks`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=297;

--
-- AUTO_INCREMENT for table `qmedia`
--
ALTER TABLE `qmedia`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=176;

--
-- AUTO_INCREMENT for table `qmsg`
--
ALTER TABLE `qmsg`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `qmsgs`
--
ALTER TABLE `qmsgs`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `qposts`
--
ALTER TABLE `qposts`
  MODIFY `_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `quser`
--
ALTER TABLE `quser`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `sid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
