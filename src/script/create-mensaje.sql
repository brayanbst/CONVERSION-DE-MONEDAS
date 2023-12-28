SET ANSI_NULLS ON;
GO
SET QUOTED_IDENTIFIER ON;
GO

CREATE TABLE [dbo].[mensaje](
    [idMensaje] [int] NOT NULL,
    [idCampania] [int] NULL,
    [idCliente] [int] NULL,
    [usuario] [varchar](30) NULL,
    [estadoEnvio] [int] NULL,
    [fechaHoraEnvio] [datetime] NULL,
    [mensaje] [varchar](160) NULL,
    [estado] [tinyint] NULL,
    PRIMARY KEY CLUSTERED ([idMensaje] ASC)
    WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY];
GO