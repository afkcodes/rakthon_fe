/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { useState } from 'react';
import { Drawer } from 'vaul';
import LoadingMessage from './LoadingMessage';
import RadioSelect from './RadioSelect';

const DrawerForm = () => {
  const [imgIds, setImgIds] = useState<any>([]);

  const [responseData, setResponseData] = useState({
    transcription: {
      en: '',
      jp: '',
    },
    summary: {
      en: '',
      jp: '',
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    lang: '',
    img: null,
    selectedImages: [],
    isSubmitting: false,
  });
  const [isPopoverVisible, setIsPopOverVisible] = useState(false);

  const updateSelectedImages = (id: number) => {
    if (imgIds.includes(id)) {
      const ids = imgIds.filter((el: number) => el !== id);
      setImgIds(ids);
    } else {
      setImgIds([...imgIds, id]);
    }
  };

  const handleTitleUpdate = (title: string) => {
    const currentFormData = {
      ...formData,
      title,
    };
    setFormData(currentFormData);
  };

  const handleArtistUpdate = (artist: string) => {
    const currentFormData = {
      ...formData,
      artist,
    };
    setFormData(currentFormData);
  };

  const handleLanguageUpdate = (lang: string) => {
    const currentFormData = {
      ...formData,
      lang,
    };
    setFormData(currentFormData);
  };

  const updateFormStatus = (isSubmitting: boolean) => {
    const currentFormData = {
      ...formData,
      isSubmitting,
    };

    if (
      (formData.artist.length &&
        formData.lang.length &&
        formData.title.length &&
        formData.img,
      formData.lang.length)
    ) {
      setFormData(currentFormData);
    } else {
      setIsPopOverVisible(true);
      setTimeout(() => {
        setIsPopOverVisible(false);
      }, 800);
    }
  };

  return (
    <Drawer.Root dismissible={false}>
      <Drawer.Trigger asChild>
        <Button
          className='bg-gradient-to-r from-[#045CAE] to-[#07156d] px-4 py-2 rounded-full self-start'
          onClick={() => {}}>
          Share your Podcast
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='dark text-foreground bg-gradient-to-b from-[#252428] to-black flex flex-col rounded-t-lg mt-24 fixed bottom-0 left-0 right-0'>
          <div className='rounded-t-[10px] flex-1 p-4'>
            <div className='flex flex-1 gap-2 justify-between'>
              <div className='flex flex-col gap-4 w-96'>
                <Input
                  type='text'
                  placeholder='Enter Podcast Title'
                  onChange={(e) => {
                    handleTitleUpdate(e.target.value);
                  }}
                  disabled={formData.isSubmitting}
                />
                <Input
                  type='text'
                  placeholder='Enter Artist Name'
                  onChange={(e) => {
                    handleArtistUpdate(e.target.value);
                  }}
                  disabled={formData.isSubmitting}
                />
                <div>
                  <label className='block mb-2 text-base dark:text-foreground-500'>
                    Upload file
                  </label>
                  <input
                    className='block w-full text-sm p-2 text-gray-400 rounded-xl cursor-pointer bg-[#252428] hover:bg-[#3f3f46] focus:outline-none'
                    type='file'
                    disabled={formData.isSubmitting}
                  />
                  <p
                    className='mt-1 text-sm text-gray-500 dark:text-gray-300'
                    id='file_input_help'>
                    MP3, AAC, etc.
                  </p>
                </div>
                <div>
                  <RadioSelect
                    onSelect={handleLanguageUpdate}
                    disabled={formData.isSubmitting}
                  />
                </div>
                <Popover placement='top' isOpen={isPopoverVisible}>
                  <PopoverTrigger>
                    <Button
                      className='flex-end bg-gradient-to-r from-[#045CAE] to-[#07156d] w-52'
                      isLoading={formData.isSubmitting}
                      onClick={() => {
                        updateFormStatus(true);
                      }}>
                      Upload
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className='px-1 py-2'>
                      <div className='text-tiny font-bold'>
                        Please fill all the fields
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {isLoading ? (
                <div className='flex flex-1 justify-center items-center'>
                  <LoadingMessage />
                </div>
              ) : null}

              {/* <div className='flex flex-1'>
                <TabData data={responseData.transcription} />
              </div> */}
              {/* <div className='grid grid-cols-4 gap-2'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11].map((el) => (
                  <ImageCard
                    url='https://ssl-static.libsyn.com/p/assets/a/1/f/a/a1fac31cf6d4d71c/SSSF_Logo_3000.jpg'
                    key={el}
                    onclick={() => {
                      updateSelectedImages(el);
                    }}
                    selected={imgIds}
                    id={el}
                  />
                ))}
              </div> */}
            </div>
            {/* <div className='py-3'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => {
                return (
                  <Chip
                    key={el}
                    className='bg--[#252428] border border-gray-500 p-4 ml-2'
                    size='lg'>
                    <span>#Chip</span>
                  </Chip>
                );
              })}
            </div> */}
            <div className='flex justify-end mt-4 '>
              <Button className='flex-end bg-gradient-to-r from-[#045CAE] to-[#07156d]'>
                Next
              </Button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerForm;
