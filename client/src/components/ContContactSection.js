import { useState } from "react";
import styled from "styled-components";
import {
  FiAlertCircle,
  FiClock,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPaperclip,
  FiPhone,
  FiSend,
  FiShield,
} from "react-icons/fi";

const COMPANY_ADDRESS = "Via Ca' Fittavoli, 20-21, 24030 Barzana (BG) - Italia";
const COMPANY_PHONE = "+39 035 5682454";
const COMPANY_EMAIL = "info@roema.it";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ContactSection = styled.section`
  width: min(100%, 1400px);
  margin: 0 auto;
  padding: 0 clamp(18px, 4vw, 76px);
`;

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(285px, 0.84fr) minmax(0, 1.52fr);
  gap: clamp(16px, 1.65vw, 28px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  min-width: 0;

  padding: clamp(22px, 2.15vw, 36px);

  border: 1px solid rgba(237, 55, 42, 0.45);
  border-radius: clamp(16px, 1.45vw, 24px);

  background:
    linear-gradient(
      145deg,
      rgba(16, 16, 16, 0.92) 0%,
      rgba(5, 5, 5, 0.96) 100%
    );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.045),
    0 18px 54px rgba(0, 0, 0, 0.38),
    0 0 36px rgba(210, 27, 17, 0.08);

  @media (max-width: 540px) {
    padding: 20px 17px;
    border-radius: 15px;
  }
`;

const CardTitle = styled.h2`
  margin: 0;

  color: #ffffff;
  font-size: clamp(20px, 1.65vw, 27px);
  font-weight: 750;
  letter-spacing: -0.035em;
  line-height: 1.1;

  &::after {
    content: "";
    display: block;

    width: 46px;
    height: 2px;
    margin-top: 13px;

    background: linear-gradient(90deg, #ff3326 0%, rgba(255, 51, 38, 0) 100%);
  }
`;

const CardText = styled.p`
  margin: 21px 0 0;

  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.62;
`;

const ContactList = styled.div`
  display: grid;
  gap: 17px;

  margin-top: clamp(26px, 2.5vw, 38px);
`;

const ContactItem = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 13px;
  align-items: center;
`;

const ContactIcon = styled.div`
  display: grid;
  place-items: center;

  width: 42px;
  height: 42px;

  border: 1px solid rgba(239, 56, 41, 0.42);
  border-radius: 50%;

  color: #ff4438;
  font-size: 17px;

  background: rgba(126, 10, 6, 0.16);
`;

const ContactMeta = styled.div`
  min-width: 0;
`;

const ContactLabel = styled.p`
  margin: 0 0 3px;

  color: rgba(255, 255, 255, 0.46);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.075em;
  line-height: 1.2;
  text-transform: uppercase;
`;

const ContactValue = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.42;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px 16px;

  margin-top: 25px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
`;

const Field = styled.label`
  display: block;
  min-width: 0;
`;

const FieldLabel = styled.span`
  display: block;
  margin-bottom: 7px;

  color: rgba(255, 255, 255, 0.83);
  font-size: 11px;
  font-weight: 650;
  line-height: 1.2;

  span {
    color: #ff483b;
  }
`;

const inputStyles = `
  width: 100%;
  min-width: 0;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 7px;

  outline: none;

  color: rgba(255, 255, 255, 0.94);
  font: inherit;
  font-size: 13px;

  background: rgba(5, 5, 5, 0.8);

  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.29);
  }

  &:focus {
    border-color: rgba(255, 61, 47, 0.85);
    box-shadow: 0 0 0 3px rgba(234, 42, 29, 0.13);
    background: rgba(13, 13, 13, 0.96);
  }
`;

const FieldInput = styled.input`
  ${inputStyles}

  height: 44px;
  padding: 0 13px;

  border-color: ${({ $hasError }) =>
    $hasError ? "rgba(255, 72, 59, 0.94)" : "rgba(255, 255, 255, 0.12)"};
`;

const MessageField = styled(Field)`
  margin-top: 15px;
`;

const FieldTextarea = styled.textarea`
  ${inputStyles}

  display: block;

  min-height: 118px;
  padding: 13px;

  resize: vertical;

  border-color: ${({ $hasError }) =>
    $hasError ? "rgba(255, 72, 59, 0.94)" : "rgba(255, 255, 255, 0.12)"};

  @media (max-width: 560px) {
    min-height: 108px;
  }
`;

const FieldError = styled.span`
  display: block;
  margin-top: 6px;

  color: #ff6055;
  font-size: 11px;
  line-height: 1.35;
`;

const UploadBlock = styled.div`
  margin-top: 15px;
`;

const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  min-height: 47px;
  padding: 10px 13px;

  border: 1px dashed rgba(255, 255, 255, 0.22);
  border-radius: 8px;

  color: rgba(255, 255, 255, 0.68);
  cursor: pointer;

  background: rgba(255, 255, 255, 0.015);

  transition:
    border-color 180ms ease,
    color 180ms ease,
    background 180ms ease;

  &:hover {
    border-color: rgba(255, 65, 52, 0.78);
    color: #ffffff;
    background: rgba(198, 28, 18, 0.08);
  }

  svg {
    flex: 0 0 auto;
    color: #ff4034;
    font-size: 18px;
  }
`;

const HiddenFileInput = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
`;

const UploadText = styled.span`
  display: grid;
  gap: 2px;
  min-width: 0;

  strong {
    color: rgba(255, 255, 255, 0.88);
    font-size: 12px;
    font-weight: 700;
  }

  small {
    color: rgba(255, 255, 255, 0.42);
    font-size: 10px;
    line-height: 1.35;
  }
`;

const FileList = styled.div`
  display: grid;
  gap: 6px;
  margin-top: 10px;
`;

const FileName = styled.p`
  display: flex;
  align-items: center;
  gap: 7px;

  margin: 0;

  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  line-height: 1.35;

  svg {
    flex: 0 0 auto;
    color: #ff4438;
  }
`;

const ConsentLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 9px;

  margin-top: 20px;

  color: rgba(255, 255, 255, 0.77);
  font-size: 12px;
  line-height: 1.52;

  cursor: pointer;

  input {
    flex: 0 0 auto;

    width: 15px;
    height: 15px;
    margin: 2px 0 0;

    accent-color: #df281b;
    cursor: pointer;
  }

  a {
    color: #ff4a3d;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  min-height: 50px;
  margin-top: 20px;

  border: 0;
  border-radius: 7px;

  color: #ffffff;
  cursor: pointer;

  font: inherit;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.075em;
  text-transform: uppercase;

  background:
    linear-gradient(90deg, #b91f16 0%, #ef3728 48%, #b91712 100%);

  box-shadow: 0 11px 25px rgba(173, 18, 11, 0.25);

  transition:
    transform 180ms ease,
    filter 180ms ease,
    box-shadow 180ms ease;

  &:hover:not(:disabled) {
    filter: brightness(1.14);
    box-shadow: 0 14px 30px rgba(210, 27, 17, 0.35);
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.64;
  }

  svg {
    font-size: 15px;
  }
`;

const FormNotice = styled.div`
  display: flex;
  gap: 9px;
  align-items: flex-start;

  margin-top: 14px;
  padding: 11px 12px;

  border: 1px solid
    ${({ $type }) =>
      $type === "success"
        ? "rgba(75, 210, 125, 0.5)"
        : "rgba(255, 76, 64, 0.56)"};
  border-radius: 8px;

  color: ${({ $type }) =>
    $type === "success"
      ? "rgba(193, 255, 215, 0.92)"
      : "rgba(255, 202, 198, 0.95)"};

  font-size: 12px;
  line-height: 1.48;

  background: ${({ $type }) =>
    $type === "success"
      ? "rgba(33, 139, 74, 0.12)"
      : "rgba(203, 28, 19, 0.12)"};

  svg {
    flex: 0 0 auto;
    margin-top: 1px;
  }
`;

const PrivacyHint = styled.p`
  display: flex;
  gap: 7px;
  align-items: flex-start;

  margin: 15px 0 0;

  color: rgba(255, 255, 255, 0.39);
  font-size: 10px;
  line-height: 1.46;

  svg {
    flex: 0 0 auto;
    margin-top: 1px;
    color: #e23b2f;
  }
`;

function ContInfoCard() {
  return (
    <Card>
      <CardTitle>Informazioni di contatto</CardTitle>

      <CardText>
        Siamo a disposizione per qualsiasi esigenza. Parlaci del tuo progetto,
        troveremo insieme la soluzione migliore.
      </CardText>

      <ContactList>
        <ContactItem>
          <ContactIcon>
            <FiMapPin />
          </ContactIcon>

          <ContactMeta>
            <ContactLabel>Dove siamo</ContactLabel>
            <ContactValue>{COMPANY_ADDRESS}</ContactValue>
          </ContactMeta>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <FiPhone />
          </ContactIcon>

          <ContactMeta>
            <ContactLabel>Telefono</ContactLabel>
            <ContactValue>{COMPANY_PHONE}</ContactValue>
          </ContactMeta>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <FiMail />
          </ContactIcon>

          <ContactMeta>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>{COMPANY_EMAIL}</ContactValue>
          </ContactMeta>
        </ContactItem>

        <ContactItem>
          <ContactIcon>
            <FiClock />
          </ContactIcon>

          <ContactMeta>
            <ContactLabel>Orari</ContactLabel>
            <ContactValue>
              Lunedì – Venerdì
              <br />
              8:00 – 12:00 · 13:30 – 17:30
            </ContactValue>
          </ContactMeta>
        </ContactItem>
      </ContactList>
    </Card>
  );
}

function ContFormCard() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setStatus(null);
  };

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length > MAX_FILES) {
      setFiles([]);
      setErrors((previousErrors) => ({
        ...previousErrors,
        files: `Puoi allegare al massimo ${MAX_FILES} file.`,
      }));
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > MAX_FILE_SIZE
    );

    if (oversizedFile) {
      setFiles([]);
      setErrors((previousErrors) => ({
        ...previousErrors,
        files: `"${oversizedFile.name}" supera il limite di 10 MB.`,
      }));
      return;
    }

    setFiles(selectedFiles);

    setErrors((previousErrors) => ({
      ...previousErrors,
      files: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Inserisci nome e cognome.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Inserisci la tua email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Inserisci un indirizzo email valido.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Scrivi il tuo messaggio.";
    }

    if (!form.privacy) {
      nextErrors.privacy = "Devi accettare l'informativa sulla privacy.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);
    setStatus(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const payload = new FormData();

    payload.append("full_name", form.fullName.trim());
    payload.append("company", form.company.trim());
    payload.append("email", form.email.trim());
    payload.append("phone", form.phone.trim());
    payload.append("message", form.message.trim());
    payload.append("privacy_accepted", "true");

    files.forEach((file) => {
      payload.append("attachments", file);
    });

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact-requests/", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          responseData.detail ||
            "Non è stato possibile inviare la richiesta. Riprova più tardi."
        );
      }

      setForm({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        privacy: false,
      });

      setFiles([]);
      setErrors({});

      setStatus({
        type: "success",
        text: "Richiesta inviata con successo. Ti risponderemo entro 1 giorno lavorativo.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error.message ||
          "Si è verificato un errore. Riprova tra qualche minuto.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardTitle>Inviaci un messaggio</CardTitle>

      <Form onSubmit={handleSubmit} noValidate>
        <FieldsGrid>
          <Field>
            <FieldLabel>
              Nome e Cognome <span>*</span>
            </FieldLabel>

            <FieldInput
              $hasError={Boolean(errors.fullName)}
              type="text"
              name="fullName"
              placeholder="Il tuo nome"
              value={form.fullName}
              onChange={handleChange}
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
            />

            {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
          </Field>

          <Field>
            <FieldLabel>Azienda</FieldLabel>

            <FieldInput
              type="text"
              name="company"
              placeholder="Nome della tua azienda"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </Field>

          <Field>
            <FieldLabel>
              Email <span>*</span>
            </FieldLabel>

            <FieldInput
              $hasError={Boolean(errors.email)}
              type="email"
              name="email"
              placeholder="La tua email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />

            {errors.email && <FieldError>{errors.email}</FieldError>}
          </Field>

          <Field>
            <FieldLabel>Telefono</FieldLabel>

            <FieldInput
              type="tel"
              name="phone"
              placeholder="Il tuo numero di telefono"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              inputMode="tel"
            />
          </Field>
        </FieldsGrid>

        <MessageField>
          <FieldLabel>
            Messaggio <span>*</span>
          </FieldLabel>

          <FieldTextarea
            $hasError={Boolean(errors.message)}
            name="message"
            placeholder="Scrivi qui il tuo messaggio..."
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />

          {errors.message && <FieldError>{errors.message}</FieldError>}
        </MessageField>

        <UploadBlock>
          <UploadLabel>
            <FiPaperclip />

            <UploadText>
              <strong>Allega disegni o documenti</strong>
              <small>
                PDF, DWG, DXF, STEP, JPG, PNG o ZIP · max 5 file · 10 MB per file
              </small>
            </UploadText>

            <HiddenFileInput
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png,.zip"
              onChange={handleFiles}
            />
          </UploadLabel>

          {errors.files && <FieldError>{errors.files}</FieldError>}

          {files.length > 0 && (
            <FileList>
              {files.map((file) => (
                <FileName key={`${file.name}-${file.lastModified}`}>
                  <FiFileText />
                  {file.name}
                </FileName>
              ))}
            </FileList>
          )}
        </UploadBlock>

        <ConsentLabel>
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
          />

          <span>
            Ho letto e accetto l&apos;
            <a href="/privacy-policy">informativa sulla privacy</a> <span>*</span>
          </span>
        </ConsentLabel>

        {errors.privacy && <FieldError>{errors.privacy}</FieldError>}

        <SubmitButton type="submit" disabled={isSubmitting}>
          <FiSend />
          {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
        </SubmitButton>

        {status && (
          <FormNotice $type={status.type} role="status">
            {status.type === "success" ? <FiShield /> : <FiAlertCircle />}
            <span>{status.text}</span>
          </FormNotice>
        )}

        <PrivacyHint>
          <FiShield />
          I tuoi dati saranno trattati nel rispetto della nostra informativa
          sulla privacy. Non condividiamo le tue informazioni con terze parti.
        </PrivacyHint>
      </Form>
    </Card>
  );
}

function ContContactSection() {
  return (
    <ContactSection>
      <ContactLayout>
        <ContInfoCard />
        <ContFormCard />
      </ContactLayout>
    </ContactSection>
  );
}

export default ContContactSection;