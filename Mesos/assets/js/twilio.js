                        const appConfig = {
                                accountSid:"ACa7edc79e5c26fb25731480185db30acd",
                                flexFlowSid:"FOabe861b18111868f5216b4fee8c508d6",
                                disableLocalStorage: true,
                                available: true,
                                colorTheme: {
                                        baseName: "BlueMediumTheme"
                                },
                                chatFriendlyName:"WebChat_Test_CL",
                                context: {
                                        friendlyName: "Web"
                                }
                        };
                        
                        Twilio.FlexWebChat.EntryPoint.defaultProps.tagline='Hablemos';
                        Twilio.FlexWebChat.MainContainer.defaultProps.width='350px';
                        Twilio.FlexWebChat.MainContainer.defaultProps.height='450px';
                        Twilio.FlexWebChat.MainContainer.defaultProps.showNotificationBar=true;

                        Twilio.FlexWebChat.MainHeader.defaultProps.titleText="Tu centro de ayuda"; //mofifica el titulo del chat.
                        Twilio.FlexWebChat.MainHeader.defaultProps.imageUrl='https://staticcl1.fidelizador.com/mesos/soapbci/mesos/Logo_Mesos.png'; //Modifica la imagen del logo del chat.
                        
                        Twilio.FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.body='Hola!!! Bienvenido a MCenter!!\nSoy tu asistente virtual 🤖 y tratare de ayudarte 🦾!\nRecuerda que toda la información que compartas estara cifrada y protegida para tu seguridad 🛡️.\n\nDime con que puedo ayudarte:\n💥 1. Denunciar un Siniestro\n🪙 2. Realizar Pagos\n📝 3. Consultar tus seguros\n🚒 4. Solicitar Asistencias\n📩 5. Descargar mi Póliza\n🤔 6. Preguntas Frecuentes\n☀️ 9. Saber el clima\n🧐 0. Otras Consultas';

                        Twilio.FlexWebChat.MessagingCanvas.defaultProps.showWelcomeMessage=false; //Oculta el mensaje de "bienvenida"
                        
                        Twilio.FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions={
                                yourDefaultName: 'Usted',
                                theirDefaultName: 'MCenter WebChatBot',
                                yourFriendlyNameOverride: false,
                                theirFriendlyNameOverride: false
                        };
                        
                        Twilio.FlexWebChat.MessagingCanvas.defaultProps.MessageStyle ="Minimal";
                        
                        Twilio.FlexWebChat.MessageInput.defaultProps.sendButtonAriaProps = {
                                ariaLabel: "Enviar Mensaje",
                                ariaLive: Twilio.FlexWebChat.AriaLive.Polite};

                        Twilio.FlexWebChat.MessageInput.defaultProps.textAreaAriaProps = {
                                        ariaLabel: "Ingresa tu opción",
                                ariaLive: Twilio.FlexWebChat.AriaLive.Assertive
                        };
                        
                        Twilio.FlexWebChat.renderWebChat(appConfig);
