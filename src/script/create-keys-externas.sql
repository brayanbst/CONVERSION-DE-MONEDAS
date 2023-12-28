##Claves externas en campania
ALTER TABLE [dbo].[campania] WITH CHECK ADD FOREIGN KEY([idCliente])
REFERENCES [dbo].[cliente] ([idCliente]);
GO

##Claves externas en cliente

ALTER TABLE [dbo].[cliente] WITH CHECK ADD CONSTRAINT [FK_usuario_cliente] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[users] ([id]);
GO

ALTER TABLE [dbo].[cliente] CHECK CONSTRAINT [FK_usuario_cliente];
GO

##Claves externas en mensaje

ALTER TABLE [dbo].[mensaje] WITH CHECK ADD FOREIGN KEY([idCampania])
REFERENCES [dbo].[campania] ([idCampania]);
GO

ALTER TABLE [dbo].[mensaje] WITH CHECK ADD FOREIGN KEY([idCliente])
REFERENCES [dbo].[cliente] ([idCliente]);
GO
