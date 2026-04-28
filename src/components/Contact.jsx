import React, { useState } from "react";
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useReveal } from "../hooks/useReveal";
import { personal } from "../data/mock";

const Contact = () => {
  const headRef = useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Tu nombre es necesario";
    if (!form.email.trim()) e.email = "Email obligatorio";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Email no válido";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Mínimo 10 caracteres";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Revisa los campos del formulario");
      return;
    }
    setSending(true);
    // Simulated submission (mock). Saved locally so user sees state.
    await new Promise((r) => setTimeout(r, 900));
    try {
      const stored = JSON.parse(localStorage.getItem("diego_messages") || "[]");
      stored.unshift({ ...form, at: new Date().toISOString() });
      localStorage.setItem("diego_messages", JSON.stringify(stored.slice(0, 20)));
    } catch {}
    setSending(false);
    setSent(true);
    toast.success("¡Mensaje enviado! Te responderé pronto.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headRef} className="reveal max-w-2xl mb-10">
          <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
            // Contacto
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            ¿Tienes una idea? <span className="text-emerald-500 dark:text-emerald-400">Hablemos.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Estoy abierto a colaboraciones, oportunidades laborales y proyectos freelance. Te respondo en menos de 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Info card */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 md:p-8 h-fit">
            <h3 className="text-lg font-semibold text-foreground">Contacto directo</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              ¿Prefieres hacerlo por otro canal? Aquí me encuentras.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={personal.social.email}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-colors group"
              >
                <span className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center">
                  <Mail size={16} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium text-foreground truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {personal.email}
                  </div>
                </div>
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center">
                  <Linkedin size={16} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm font-medium text-foreground">Diego</div>
                </div>
              </a>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-colors"
              >
                <span className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center">
                  <Github size={16} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm font-medium text-foreground">@Diego04012002</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <span className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Ubicación</div>
                  <div className="text-sm font-medium text-foreground">{personal.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Tu nombre"
                  className="mt-1.5 h-11 bg-background border-border focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
                />
                {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="tucorreo@dominio.com"
                  className="mt-1.5 h-11 bg-background border-border focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="subject" className="text-xs font-medium text-muted-foreground">
                Asunto
              </Label>
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="¿De qué quieres hablar?"
                className="mt-1.5 h-11 bg-background border-border focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                Mensaje
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                placeholder="Cuéntame sobre tu proyecto o idea…"
                className="mt-1.5 bg-background border-border resize-none focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
              )}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Button
                type="submit"
                disabled={sending}
                className="h-11 px-5 bg-emerald-500 hover:bg-emerald-600 text-white border-0 disabled:opacity-70"
              >
                {sending ? (
                  "Enviando…"
                ) : sent ? (
                  <>
                    <CheckCircle2 size={16} className="mr-2" /> Enviado
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" /> Enviar mensaje
                  </>
                )}
              </Button>
              <span className="text-xs text-muted-foreground">
                Tus datos no se comparten con nadie.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
