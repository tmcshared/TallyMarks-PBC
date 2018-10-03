export const XML_REQUEST = {
  WRAPPER: body => {
    return `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
                <Body>
                    ${body}
                 </Body>
            </Envelope>`;
  }
};
