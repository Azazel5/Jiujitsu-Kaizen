export interface MovePicker {
    position: string | null,
    technique: string | null,
    showPosition: boolean,
    showTechnique: boolean
}

export interface ConciseCardProps {
    imageSrc: string,
    cardTitle: string,
    cardClickHandler: (e: React.MouseEvent<HTMLDivElement>) => void,
}

export interface TalkativeCardProps extends ConciseCardProps {
    channelName: string,
    channelId: string,
    channelAvatar: string,
    extraKeywords: Array<String>,
    video_length: string
}

type VideoThumbnail = {
    url: string,
    width: number,
    height: number
}

export interface Video {
    channelName: string,
    channelId: string,
    channelAvatar: string,
    video_title: string,
    video_url: string,
    uniform: string,
    position: string,
    technique: {
        type: string,
        keywords: Array<string>
    },
    video_static_thumbnails: Array<VideoThumbnail>,
    video_moving_thumbnails?: Array<VideoThumbnail>,
    video_length: string
}