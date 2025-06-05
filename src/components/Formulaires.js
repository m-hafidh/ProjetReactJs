import React, { useState} from "react";
import "./formulaire.css";

function Formulaires() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  //Declarer une variable pour stocker les erreurs
  const [erreur, setErreur] = useState("");


/* handleSubmit est une fonction que tu écris toi-même pour gérer l’envoi d’un formulaire.
Le nom est libre, mais par convention on l'appelle handleSubmit ("gérer la soumission").*/
  const handleSubmit = (e) => {
    //e=event en javascript
    e.preventDefault(); //Il empeche le rechargement de la page
   // alert( `Nom : ${nom}\nPrenom : ${prenom}\nEmail : ${email}`);

    //Validation des champs nom
    if (!nom.trim()){ // trim(): Verifie que le champ n'est pas vide
      setErreur( "Le nom est obligatoire");
      return;
    }

    //Validation des champs prenom
    if (!prenom.trim()){
      setErreur( "Le prenom est obligatoire");
      return;
    }
    //Validation des champs email
    if (!nom.includes('@')){ // le includes('@') verifie que l'email a bien un à @.
      setErreur( "L'email n'est pas valide");
      return;
    }
    //si tout est bon
    setErreur(""); //Affiche l'erreur
    alert( `Nom : ${nom}\nPrenom : ${prenom}\nEmail : ${email}`);


  };

  return  (
       
    <div className=" container m-3 p-4 ">
      <div className={ " card p-1 m-1" }>
          <form onSubmit={handleSubmit}>
            {erreur && <p style={{ color: "red"}}> {erreur}</p> }

            <div className={ "mb-3 form-group"}>
              <label for="nom">Nom :</label>
              <input type="text" className="form-control" placeholder=" your name" value={nom} onChange={(e) => setNom(e.target.value)}  />
              {/* Le onChange detecte si l'utilisateurs tape quelque chose*/}
            </div>

            <div className={ "mb-3 form-group"}>
              <label for ="prenom">Prenom :</label>
              <input type="text" className="form-control" placeholder="your lastname" value={prenom} onChange={(e) => setPrenom(e.target.value)}  />
            </div>

            <div className={ "mb-3 form-group"}>
              <label for="email">E-mail :</label>
              <input type="text" className=" form-control" placeholder=" your e-mail adresse " value={email} onChange={(e) => setEmail(e.target.value)}  />
            </div>

            
              <button type="submit" className="btn btn-primary ">Envoyer</button>
            
          </form>

      </div>
    </div>

  )
}

export default Formulaires