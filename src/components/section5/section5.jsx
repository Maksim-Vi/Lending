import React from "react";
import '../../css/section6.css'
import bg from '../../material/bgImgContacts.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-input': {
      padding: '18.5px 60px',
      border: '1px solid #41c8c2',
      borderRadius:'4px'
    },
    '& .MuiInputLabel-outlined': {
      color: '#41c8c2',
    },
  },
}));

const Section5 = () => {

  const classes = useStyles();

  return (
    <div>
      <section className="section6 parallaxLayerBack">
        <img
          className="bgImgContacts parallaxLayerTop"
          src={bg}
          alt=""
        />
        <div className="containerS6">
          <form className="form">
            <div className="group">
            <TextField className={classes.root} id="outlined-search" label="Email" type="search" variant="outlined" />
            </div>
            <div className="group">
               <TextField
                 className={classes.root}
                 id="outlined-password-input"
                 label="Password"
                 type="password"
                 autoComplete="current-password"
                 variant="outlined"
              />
            </div>
            <div className="BtnGetCons">
              <a>Получить консультацию</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Section5;
