import React from 'react';
import { Link } from 'react-router-dom';
// Import the Time component from the correct path
import Time from '../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

function Video({ video }) {
  console.log(video);

  const thumbnailUrl = video?.thumbnails?.[0]?.url;

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-col'>
          <div className='relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden'>
            {thumbnailUrl ? (
              <>
                <img
                  className='h-full w-full'
                  src={thumbnailUrl}
                  alt={video?.title || 'Video thumbnail'}
                />
                {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
              </>
            ) : (
              <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                <p>No Thumbnail</p>
              </div>
            )}
          </div>
          {/* Author's Avatar */}
          <div className='flex space-x-2 mt-3'>
            <div className='flex items-start'>
          <div className='flex h-9 w-9 rounded-full overflow-hidden border mt-2'>
            <img
              className='h-full w-full rounded-full overflow-hidden'
              src={video?.author?.avatar?.[0]?.url}
              alt={video?.author?.name || 'Author'}
            />
          </div>
        </div>
        <div>
          <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>
          <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600'>
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]'/>
            )}
            </span>
            <div className='flex text-gray-500 text-[12px]'>
              <span>
                {`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}
              </span>
              <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'>
                .
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
        </div>
        </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
