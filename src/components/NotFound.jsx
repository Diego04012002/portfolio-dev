import React from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-5 relative overflow-hidden">
      <div className="aurora">
        <div
          className="aurora__blob"
          style={{ top: "-100px", left: "-120px", background: "radial-gradient(circle, #10b981 0%, transparent 60%)" }}
        />
        <div
          className="aurora__blob"
          style={{ bottom: "-160px", right: "-120px", background: "radial-gradient(circle, #14b8a6 0%, transparent 60%)" }}
        />
      </div>
      <div className="relative text-center max-w-lg">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
          Error 404
        </p>
        <h1 className="mt-3 text-7xl md:text-9xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
          Página no encontrada
        </h2>
        <p className="mt-3 text-muted-foreground">
          La ruta que buscas no existe o se ha movido. Quizás te equivocaste de URL…
          o quizás yo todavía no la he construido.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="h-11 px-5 bg-emerald-500 hover:bg-emerald-600 text-white border-0">
            <Link to="/">
              <Home size={16} className="mr-2" /> Volver al inicio
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="h-11 px-5 border-border bg-secondary/40 hover:bg-secondary"
          >
            <ArrowLeft size={16} className="mr-2" /> Atrás
          </Button>
        </div>
        <div className="mt-12 inline-flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <Search size={12} />
          tip: pulsa{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border">⌘</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border">K</kbd>{" "}
          en cualquier página
        </div>
      </div>
    </div>
  );
};

export default NotFound;
