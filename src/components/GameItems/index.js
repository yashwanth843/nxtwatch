import VideoContext from '../../Context/VideoContext'
import {
  GameList,
  GameImg,
  GameTitle,
  GameViews,
  GameLink,
} from './styledComponent'

const GameItems = props => {
  const {gameDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetails

  return (
    <VideoContext.Consumer>
      {value => {
        const {isTheme} = value
        const textColor = isTheme ? '#ffffff' : '#0f0f0f'
        return (
          <GameLink to={`/videos/${id}`}>
            <GameList>
              <GameImg src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={textColor}>{title}</GameTitle>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </GameList>
          </GameLink>
        )
      }}
    </VideoContext.Consumer>
  )
}

export default GameItems
