// Öncelikle, şema (schema) oluşturucuyu içe aktarmamız gerekiyor
import createSchema from 'part:@sanity/base/schema-creator'

// Daha sonra, kurulu olabilecek eklentilerden gelen şema tiplerini içe aktarıyoruz
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import abouts from './abouts'
import skills from './skills'
import contact from './contact'

// Şemamızı oluşturucuya veriyoruz ve sonucu Sanity’ye aktarıyoruz
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([works, abouts, skills, contact
  ]),
})
