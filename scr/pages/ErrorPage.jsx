import "../styles/_ErrorPage.scss";

function ErrorPage() {
    return (
      <div className="error">
        <p className="error__title">404</p>
        <p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    )
  }
  
  export default ErrorPage;