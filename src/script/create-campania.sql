SET ANSI_NULLS ON;
GO
SET QUOTED_IDENTIFIER ON;
GO

CREATE TABLE [dbo].[campania](
    [idCampania] [int] NOT NULL,
    [idCliente] [int] NULL,
    [nombre] [varchar](200) NULL,
    [fechaHoraProgramacion] [datetime] NULL,
    [estado] [tinyint] NULL,
    PRIMARY KEY CLUSTERED ([idCampania] ASC)
    WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY];
GO
