import env from '../../config/dotEnv.config.js';

const whatEmailHtml = async (data) => {

  console.log(data);
  

  const address = env.frontUrl;

  return `
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8; padding:40px 0;">
    <tr>
      <td>
        <table align="center" width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff; border-radius:10px; font-family:Arial, Helvetica, sans-serif; color:#333333; box-shadow:0 2px 10px rgba(0,0,0,0.1); overflow:hidden;">

          <!-- Banner superior -->
          <tr>
            <td>
              <img src="https://res.cloudinary.com/ddjldilsm/image/upload/v1755727205/publicity/banner/bjq3t02gyeb3bwbs3jkr.png" width="600" height="180" alt="Banner Odoar"
                style="display:block; width:100%; height:auto; border-radius:10px 10px 0 0;">
            </td>
          </tr>

          <!-- Titulo -->
          <tr>
            <td style="padding:30px 40px 10px 40px; text-align:center;">
              <h2 style="margin:0; color:#1565C0; font-size:26px; letter-spacing:1px;">
                Recuperación de contraseña
              </h2>
              <p style="font-size:15px; color:#555555; line-height:1.7; margin:15px 0 0;">
                Hola <strong>${data.name}</strong>, haz clic en el botón de abajo para restablecer tu contraseña.
              </p>
            </td>
          </tr>

          <!-- Código -->
          <tr>
            <td style="padding:10px 40px; text-align:center;">
              <p style="font-size:14px; color:#555555; line-height:1.7; margin:0;">
                Tu código de verificación es:
              </p>
              <p style="font-size:24px; font-weight:bold; color:#1565C0; letter-spacing:4px; margin:10px 0 0;">
                ${data.code}
              </p>
            </td>
          </tr>

          <!-- Separador -->
          <tr>
            <td style="padding:15px 0;">
              <hr style="border:0; border-top:1px solid #dde3ea; width:90%; margin:auto;">
            </td>
          </tr>

          <!-- Botón -->
          <tr>
            <td style="padding:30px 40px; text-align:center;">
              <a href="${address}/access_account/${data._id}"
                style="background-color:#1565C0; color:#ffffff; text-decoration:none; padding:14px 32px;
                border-radius:6px; font-size:16px; font-family:Arial, Helvetica, sans-serif;
                display:inline-block; font-weight:bold; letter-spacing:0.5px;">
                Recuperar contraseña
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:20px 20px 15px 20px; color:#999; font-size:12px;">
              <p style="margin:0; line-height:1.8;">
                © ${new Date().getFullYear()} Odoar · Todos los derechos reservados.<br>
                <a href="${address}" style="color:#1565C0; text-decoration:none;">${address}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `;
};

export { whatEmailHtml };