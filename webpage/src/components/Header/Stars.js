import React, {Fragment, useEffect} from 'react';
import '../../styles/Header/Stars.css';

const Stars = ({numberOfSmallStars}) => {
  const generateStarsPositions = (number, color) => {
    let result = "";
    const maxVh = 100;
    const maxVw = 100;

    for (let i = 0; i < number; i++) {
      let x = Math.round(Math.random() * maxVw * 10) / 10;
      let y = Math.round(Math.random() * maxVh * 10) / 10;
      result += `${x}vw ${y}vh ${color}, `;
    }
    return result.slice(0, -2);
  };

  const printStars = (kind, number) => {
    const stars = generateStarsPositions(number, "#fff");
    document.getElementById(`stars${kind}`).style.boxShadow = stars;
    document.getElementById(`stars${kind}Hidden`).style.boxShadow = stars;
  }

  useEffect(() => {
    printStars("Small", numberOfSmallStars);
    printStars("Medium", numberOfSmallStars / 4);
    printStars("Big", numberOfSmallStars / 16);
  });

  return <Fragment>
    <div id="starsSmall">{}</div>
    <div id="starsSmallHidden">{}</div>
    <div id="starsMedium">{}</div>
    <div id="starsMediumHidden">{}</div>
    <div id="starsBig">{}</div>
    <div id="starsBigHidden">{}</div>
  </Fragment>
}

export default Stars;
