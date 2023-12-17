import "./css/Intereses.css";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

const InteresesEvento = ({ usuario, interes, interesesEvento }) => {

    
    const seguirInteres = () => {
        interesesEvento.setInteresesEvento(intereses => [...intereses, interes])
    }

    return (
        <div className="intereses">
            <div className="interes">
                <h4>{interes.nombreInteres}</h4>
            </div>
            {
                interesesEvento.interesesEvento.some(interesEvento => interesEvento.idinteres === interes.idinteres)
                    ? <BookmarkIcon className="in-interes" fontSize="inherit" />
                    : <BookmarkAddIcon onClick={seguirInteres} className="get-interes" sx={{ fontSize: 30 }} />
            }
        </div>
    );
};

export default InteresesEvento;