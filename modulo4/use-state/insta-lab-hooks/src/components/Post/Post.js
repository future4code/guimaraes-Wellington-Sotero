///código hooks

import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'


import React, { useState } from 'react'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(false)
  const [comentarios, setComentarios] = useState(false)
  

  const onClickCurtida = () => {
    if (curtido) {}
    else {

    }
  };

  const onClickComentario = () => {
    if (comentarios) {}
    else {

    }
  };

  const enviarComentario = () => {
    if (numeroComentarios) {}
    else {

    }
  };

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco) = (props.IconeComContador) = () => {
    if (iconeCurtida) {}
    else {

    }
  };

  const caixaDeComentario = state.comentando ? (
    
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    
    state.comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>


      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}

          const caixaDeComentario
          
        />


        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post