
import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from '../../types/review';
import { requestBackend } from '../../util/requests';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
      })
      .catch((error) => {
        console.log('ERRO AO SALVAR !!', error);
      });
  };
  return (
    <div className='avaliation-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input 
              {...register('text', {
                required: 'Campo obrigatório !',
              })}
              type="text"
              name="text"
              placeholder="Deixe sua avaliação aqui"
            />
            <div>{errors.text?.message}</div>
          </div>
          <div className='avaliation-btn-container'>
          <button className='avaliation-btn' type="submit">SALVAR AVALIAÇÃO</button>
          </div>

        </form>
      </div>
  );
};

export default ReviewForm;