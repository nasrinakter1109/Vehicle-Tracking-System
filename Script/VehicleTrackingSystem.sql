USE [VehicleTrackingSystemDB]
GO
/****** Object:  Table [dbo].[ApplicationModules]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationModules](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[ModuleRoutePath] [varchar](50) NULL,
	[IsActive] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApplicationPages]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationPages](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ModuleID] [int] NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[PageRoutePath] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApplicationUserAssignedPages]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationUserAssignedPages](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PageID] [int] NOT NULL,
	[UserID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeviceInfo]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeviceInfo](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DeviceName] [varchar](50) NULL,
	[DeviceRegNo] [varchar](50) NULL,
 CONSTRAINT [PK_DeviceInfo] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserLogInfo]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserLogInfo](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [varchar](50) NULL,
	[LoginTime] [varchar](50) NULL,
	[LogoutTime] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NULL,
	[LoginID] [varchar](50) NULL,
	[LoginPassword] [varchar](50) NULL,
	[UserTypeID] [int] NULL,
	[CreatedDate] [varchar](50) NULL,
	[IsChangedPassword] [varchar](50) NULL,
	[IsActive] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserType]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserType](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserTypeName] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleLocation]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleLocation](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[VehicleID] [int] NULL,
	[Latitude] [decimal](18, 0) NULL,
	[Longitude] [decimal](18, 0) NULL,
	[Spreed] [decimal](18, 0) NULL,
	[DeviceID] [int] NULL,
	[EntryDate] [datetime] NULL,
	[EntryTime] [time](7) NULL,
	[Location] [varchar](50) NULL,
	[IsActive] [smallint] NULL,
 CONSTRAINT [PK_VehicleLocation] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VehicleRegistation]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VehicleRegistation](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[VehicleName] [varchar](50) NULL,
	[RegistrationNo] [varchar](50) NULL,
	[CompanyName] [varchar](50) NULL,
	[Model] [varchar](20) NULL,
	[Colour] [varchar](20) NULL,
	[IgnitionKeyNumber] [varchar](50) NOT NULL,
 CONSTRAINT [PK_VehicleRegistation] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF_Users_IsChangedPassword]  DEFAULT ('No') FOR [IsChangedPassword]
GO
/****** Object:  StoredProcedure [dbo].[sp_GetLocationList]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--sp_GetLocationList
					CREATE PROC [dbo].[sp_GetLocationList] 
					AS
					BEGIN
					  SELECT dbo.VehicleLocation.*, dbo.DeviceInfo.DeviceName, dbo.VehicleRegistation.VehicleName
FROM  dbo.VehicleLocation INNER JOIN
       dbo.VehicleRegistation ON dbo.VehicleLocation.VehicleID = dbo.VehicleRegistation.ID INNER JOIN
       dbo.DeviceInfo ON dbo.VehicleLocation.DeviceID = dbo.DeviceInfo.ID where IsActive=1
					END
GO
/****** Object:  StoredProcedure [dbo].[sp_SaveVehicle]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

					Create PROC [dbo].[sp_SaveVehicle] (
					    @ID  [int] ,
						@VehicleName [varchar](50) NULL,
						@RegistrationNo [varchar](50) NULL,
						@CompanyName [varchar](50) NULL,
						@Model [varchar](20) NULL,
						@Colour [varchar](20) NULL,
						@IgnitionKeyNumber [varchar](50) )
					AS
					BEGIN
					  IF (@ID=0)
					  INSERT INTO VehicleRegistation (VehicleName,RegistrationNo,CompanyName,Model,Colour,IgnitionKeyNumber)
					  VALUES (@VehicleName,@RegistrationNo,@CompanyName,@Model,@Colour,@IgnitionKeyNumber)
						
					  ELSE 
					  UPDATE VehicleRegistation Set
							VehicleName=@VehicleName,
							RegistrationNo=@RegistrationNo,
							CompanyName=@CompanyName,
							Model=@Model,
							Colour=@Colour,
							IgnitionKeyNumber=@IgnitionKeyNumber
							WHERE ID=@ID

					END
GO
/****** Object:  StoredProcedure [dbo].[sp_SaveVehicleLocation]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

					CREATE PROC [dbo].[sp_SaveVehicleLocation] (
						@VehicleID [int] NULL,
						@Latitude [decimal](18, 0) NULL,
						@Longitude [decimal](18, 0) NULL,
						@Spreed [decimal](18, 0) NULL,
						@DeviceID [int] NULL,
						@Location [varchar](50))
						AS
						BEGIN
					  
						INSERT INTO VehicleLocation (VehicleID,Latitude,Longitude,Spreed,DeviceID,EntryDate,EntryTime,Location,IsActive)
						 VALUES (@VehicleID,@Latitude,@Longitude,@Spreed,@DeviceID,GETDATE(),getutcdate(),@Location,1)
						
					  

						END
GO
/****** Object:  StoredProcedure [dbo].[sp_UserLogin]    Script Date: 6/26/2021 7:38:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

					Create PROC [dbo].[sp_UserLogin] (@LoginID AS NVARCHAR(MAX),
					@LoginPassword AS NVARCHAR(MAX))
					AS
					BEGIN
					  SELECT
						dbo.Users.ID					   
					   ,dbo.Users.UserName
					   ,dbo.Users.LoginID
					   ,dbo.Users.LoginPassword
					   ,dbo.Users.UserTypeID
					   ,dbo.UserType.UserTypeName
					   ,ISNULL(dbo.Users.IsChangedPassword, 'No') AS IsChangedPassword
					  FROM dbo.Users
					  INNER JOIN dbo.UserType
						ON dbo.Users.UserTypeID = dbo.UserType.ID					  
					  WHERE (dbo.Users.LoginID = @LoginID)
					  AND (dbo.Users.LoginPassword = @LoginPassword)
					  AND (ISNULL(dbo.Users.IsActive, 'Yes') <> 'No')
					END
GO
