import s from './TellAbout.module.sass'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {InferType} from "yup";
import classNames from "classnames";
import instance from "../../../utils/axiox/instance";
import {useState} from "react";
import Preloader from "../../../utils/Preloader/Preloader";

const schema = yup.object({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .email('Введите правильный Email')
        .required(),
    tel: yup
        .string()
        .required()
        .min(10),
    checkbox: yup
        .boolean()
        .oneOf([true])
        .required(),
    message: yup
        .string()
        .required(),

})

type MyForm = InferType<typeof schema>
export default function TellAbout() {
    const [isSendingForm, setIsSendingForm] = useState<'default' | 'loading' | 'success'>('default')

    const {
        register,
        handleSubmit,
        resetField,
        formState: {
            errors
        }
    } = useForm<MyForm>({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    })
    console.log()

    async function submit(data: MyForm) {

        setIsSendingForm('loading')
        const res = await instance.post('feedbacks', {
            name: data.name,
            email: data.email,
            tel: data.tel,
            message: data.message,
        })

        if (res.status === 200) {
            setIsSendingForm('success')
            setTimeout(() => setIsSendingForm('default'), 5000)
        }

        if (res.status === 422) {
            alert('Введёные в форму данные - неверны, попробуйте ещё раз.')
            setIsSendingForm('default')
        }
        if (res.status !== 200 && res.status !== 422) {
            alert('Во время отправки произошла ошибка, пожалуйста попробуйте ещё раз')
            setIsSendingForm('default')
        }
        resetField('name')
        resetField('email')
        resetField('tel')
        resetField('message')
        resetField('checkbox')
    }
    return (
        <div className={s.tellAboutMobileBg}>
            <div className="container">
                <div className={s.tellAbout}>
                    <div className={s.titleWrapper}>
                        <img className={s.img} src="/images/tellAbout.png" alt=""/>
                        <div className={s.title}>Расскажите <br/> о вашем проекте:</div>
                    </div>
                    <form className={s.form} onSubmit={handleSubmit(submit)}>
                        <div className={s.inputs}>
                            <div className={s.item}>
                                <input
                                    {...register('name')}
                                    className={classNames(s.input, {
                                        [s.error]: errors.name
                                    })} type="text" id={'name'} placeholder={'Ваше имя*'}/>
                                <label className={s.label} htmlFor="name">Ваше имя</label>
                            </div>
                            <div className={s.item}>

                                <input
                                    {...register('email')}
                                    className={classNames(s.input, {
                                        [s.error]: errors.email
                                    })} type="email" id={'email'} placeholder={'Email*'}/>
                                <label className={s.label} htmlFor="email">Email</label>
                            </div>
                            <div className={s.item}>
                                <input
                                    {...register('tel')}
                                    className={classNames(s.input, {
                                        [s.error]: errors.tel
                                    })}
                                    type="tel" id={'tel'} placeholder={'Телефон*'} maxLength={18}/>
                                <label className={s.label} htmlFor="tel">Телефон</label>
                            </div>
                        </div>

                        <div className={s.item}>
                        <textarea
                            {...register('message')}
                            className={classNames(s.textarea, {
                                [s.error]: errors.message
                            })}
                            id='message' placeholder={'Сообщение*'}></textarea>
                            <label className={classNames(s.label, s.labelTextArea)} htmlFor="message">Сообщение</label>
                        </div>

                        <div className={s.check}>
                            <input
                                {...register('checkbox')}
                                className={s.checkbox}
                                type="checkbox"
                                id={'checkbox'}
                                checked={window.screen.width < 500 ? true : undefined}
                            />
                            <label className={classNames(s.labelCheckbox, {
                                [s.error]: errors.checkbox
                            })} htmlFor="checkbox"></label>
                            <label className={s.checkboxDescription} htmlFor="checkbox">Согласие на обработку
                                персональных
                                данных</label>
                        </div>


                        <button
                            className={s.button}
                            type={"submit"}
                            disabled={isSendingForm !== 'default'}
                        >
                            <div className={classNames({
                                [s.hidden]: isSendingForm !== 'default'
                            })}
                            >Обсудить проект
                            </div>
                            {isSendingForm === 'loading' && <div className={s.preloader}><Preloader/></div>}
                            {isSendingForm === 'success' && <div className={s.success}>Успешно!</div>}
                        </button>
                        <div className={s.mobileCheckboxApply}>
                            Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}