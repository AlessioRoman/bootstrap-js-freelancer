function Links({ tag, url }) {
  return (
    <li className="text-purpleText inline font-medium text-sm">
      <a href={url}> {tag} </a>
    </li>
  );
}

export default Links;
